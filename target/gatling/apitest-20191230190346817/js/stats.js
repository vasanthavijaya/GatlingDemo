var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1251",
        "ok": "-",
        "ko": "1251"
    },
    "maxResponseTime": {
        "total": "13557",
        "ok": "-",
        "ko": "13557"
    },
    "meanResponseTime": {
        "total": "7385",
        "ok": "-",
        "ko": "7385"
    },
    "standardDeviation": {
        "total": "3129",
        "ok": "-",
        "ko": "3129"
    },
    "percentiles1": {
        "total": "7516",
        "ok": "-",
        "ko": "7516"
    },
    "percentiles2": {
        "total": "9886",
        "ok": "-",
        "ko": "9886"
    },
    "percentiles3": {
        "total": "12456",
        "ok": "-",
        "ko": "12456"
    },
    "percentiles4": {
        "total": "13409",
        "ok": "-",
        "ko": "13409"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "-",
        "ko": "71.429"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "1251",
        "ok": "-",
        "ko": "1251"
    },
    "maxResponseTime": {
        "total": "13557",
        "ok": "-",
        "ko": "13557"
    },
    "meanResponseTime": {
        "total": "7385",
        "ok": "-",
        "ko": "7385"
    },
    "standardDeviation": {
        "total": "3129",
        "ok": "-",
        "ko": "3129"
    },
    "percentiles1": {
        "total": "7516",
        "ok": "-",
        "ko": "7516"
    },
    "percentiles2": {
        "total": "9886",
        "ok": "-",
        "ko": "9886"
    },
    "percentiles3": {
        "total": "12456",
        "ok": "-",
        "ko": "12456"
    },
    "percentiles4": {
        "total": "13409",
        "ok": "-",
        "ko": "13409"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "71.429",
        "ok": "-",
        "ko": "71.429"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
