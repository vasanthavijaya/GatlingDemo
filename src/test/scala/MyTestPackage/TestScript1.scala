package MyTestPackage

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

  class TestScript1 extends Simulation {

    val httpProtocol = http
      .baseUrl("http://cheeze-flight-booker.herokuapp.com")
      .inferHtmlResources()
      .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36")
      .silentResources
    val headers_0 = Map(
      "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Encoding" -> "gzip, deflate",
      "Accept-Language" -> "en-US,en;q=0.9",
      "Upgrade-Insecure-Requests" -> "1")

    val headers_3 = Map(
      "Accept" -> "image/webp,image/apng,image/*,*/*;q=0.8",
      "Accept-Encoding" -> "gzip, deflate",
      "Accept-Language" -> "en-US,en;q=0.9",
      "Pragma" -> "no-cache")

    val headers_12 = Map(
      "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "Accept-Encoding" -> "gzip, deflate",
      "Accept-Language" -> "en-US,en;q=0.9",
      "Origin" -> "http://cheeze-flight-booker.herokuapp.com",
      "Upgrade-Insecure-Requests" -> "1")


    val csvFeeder = csv("data/TestData1.csv").circular
    val randomEmailFeeder = Iterator.continually(Map("randomEmail" -> (Random.alphanumeric.take(20).mkString + "@ggmail.com")))

    val scn = scenario("TestScript1")
      .exec(flushHttpCache)
      .exec(flushSessionCookies)
      .exec(flushCookieJar)
      .exec(http("HomePage")
        .get("/")
        .headers(headers_0)
        .resources(http("request_1")
          .get("/assets/application-c99cbb3caf78d16bb1482ca2e41d7a9c.css"),
          http("request_2")
            .get("/assets/application-2534172286055efef05dbb34d2da8fc2.js"),
          http("request_3")
            .get("/favicon.ico")
            .headers(headers_3)))
      .pause(10)
      .exec(http("SearchFlight")
        .get("/flights?utf8=%E2%9C%93&from=1&to=4&date=2015-01-05&num_passengers=2&commit=search")
        .headers(headers_0)
        .resources(http("request_5")
          .get("/assets/application-c99cbb3caf78d16bb1482ca2e41d7a9c.css"),
          http("request_6")
            .get("/assets/application-2534172286055efef05dbb34d2da8fc2.js"),
          http("request_7")
            .get("/favicon.ico")))
      .pause(4)
      .exec(http("SelectFlight")
        .get("/bookings/new?utf8=%E2%9C%93&flight_id=21&commit=Select+Flight&num_passengers=2")
        .check(css("input[name='authenticity_token']", "value").saveAs("authToken"))
        .headers(headers_0)
        .check(css("h1:contains('Book Flight')").exists)
        .check(substring("Email").find.exists)
        .check(substring("Email").count.is(2))
        .check(bodyString.saveAs("BODY")))
      .exec {
        session =>
          //println(session("BODY").as[String])
          session
      }
      .pause(33)
      .feed(csvFeeder, 10)
      .feed(randomEmailFeeder, 10)
      .exec(http("BookFlight")
        .post("/bookings")
        .headers(headers_12)
        .formParam("utf8", "✓")
        .formParam("authenticity_token", "${authToken}")
        .formParam("booking[flight_id]", "21")
        .formParam("booking[passengers_attributes][0][name]", "${name1}")
        .formParam("booking[passengers_attributes][0][email]", "${randomEmail1}")
        .formParam("booking[passengers_attributes][1][name]", "${name2}")
        .formParam("booking[passengers_attributes][1][email]", "${randomEmail2}")
        .formParam("commit", "Book Flight")
        .resources(http("request_13")
          .get("/favicon.ico")
        .silent))

    setUp(
      scn.inject(rampConcurrentUsers(0) to (6) during(10),constantConcurrentUsers(6) during(60))
      //scn.inject(rampConcurrentUsers(0) to (4) during(10),constantConcurrentUsers(4) during(60))
    ).protocols(httpProtocol)
      .assertions(
        global.responseTime.max.lt(1000),
        forAll.responseTime.max.lt(1000),
        details("BookFlight").responseTime.max.lt(1000),
        global.successfulRequests.percent.is(100),
        global.failedRequests.percent.is(0)
      )
  }
