var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4661",
        "ok": "4661",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2025",
        "ok": "2025",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1636",
        "ok": "1636",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3425",
        "ok": "3425",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4644",
        "ok": "4644",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4655",
        "ok": "4655",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 53
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.667",
        "ok": "6.667",
        "ko": "-"
    }
},
contents: {
"req_genacctoken-168e6": {
        type: "REQUEST",
        name: "GenAccToken",
path: "GenAccToken",
pathFormatted: "req_genacctoken-168e6",
stats: {
    "name": "GenAccToken",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "874",
        "ok": "874",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4661",
        "ok": "4661",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2208",
        "ok": "2208",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1399",
        "ok": "1399",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1636",
        "ok": "1636",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3423",
        "ok": "3423",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4647",
        "ok": "4647",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4658",
        "ok": "4658",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 45
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 55
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
    }
}
    },"req_getsubmissions-dbf52": {
        type: "REQUEST",
        name: "GetSubmissions",
path: "GetSubmissions",
pathFormatted: "req_getsubmissions-dbf52",
stats: {
    "name": "GetSubmissions",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "310",
        "ok": "310",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3691",
        "ok": "3691",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1842",
        "ok": "1842",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1475",
        "ok": "1475",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1443",
        "ok": "1443",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3638",
        "ok": "3638",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3663",
        "ok": "3663",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3685",
        "ok": "3685",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.333",
        "ok": "3.333",
        "ko": "-"
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
