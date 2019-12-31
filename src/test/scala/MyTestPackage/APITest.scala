package MyTestPackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class APITest extends Simulation {
  val baseUrl = "https://nitestaz.planninginspectorate.gov.uk"

/*
  val accessgen = http
    .exec (http ("GenAccToken")
    .post (baseUrl + "?oauth=token")
    .formParam ("grant_type", "password")
    .formParam ("username", "horizon")
    .formParam ("password", "YuRgetM32do?")
    .headers (sessionHeaders)
    .check (status is 200)
    .check (bodyString.saveAs ("BODY") )
    .check (jsonPath ("$.access_token").exists.saveAs ("authToken") ) )

*/

  val sessionHeaders = Map("Authorization" -> "Basic RGQ3aVMxV2M3aHVNVnhadjVuNzZtZHB5ZHo5V3diOjQ5b2NzaGRvdGtHWTZDdzY4QnVmSFF0N3BHR3lEYw==")

  val httpProtocol = http
    .baseUrls(baseUrl)

  val scn = scenario("accessToken")
    .exec(http("GenAccToken")
      .post(baseUrl+"?oauth=token")
      .formParam("grant_type", "password")
      .formParam("username", "horizon")
      .formParam("password", "YuRgetM32do?")
      .headers(sessionHeaders)
      .check(status is 200)
      .check(bodyString.saveAs("BODY"))
      .check(jsonPath("$.access_token").exists.saveAs("authToken")))

    .exec(http("GetSubmissions")
      .get("https://nitestaz.planninginspectorate.gov.uk/api/v1/submissions/project/TR010001?access_token=${authToken}")
      .check(status is 200)
      .check(bodyString.saveAs("BODY1"))
    )

    setUp(scn.inject(constantUsersPerSec(2) during(10))).protocols(httpProtocol)
    .assertions(
      global.responseTime.max.lt(1000),
      forAll.responseTime.max.lt(1000),
      details("GetSubmissions").responseTime.max.lt(1000),
      global.successfulRequests.percent.is(100),
      global.failedRequests.percent.is(0)
    )
}





/*.exec {
      session =>
        println("${authToken}")
        val response = session("BODY").as[String]
        println(s"Response body: \n$response")
        session
    }*/


/*.exec {
    session =>
      val response1 = session("BODY1").as[String]
      println(s"Response body: \n$response1")
      session
  }*/