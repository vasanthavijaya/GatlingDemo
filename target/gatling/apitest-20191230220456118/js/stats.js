var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles2": {
        "total": "452",
        "ok": "452",
        "ko": "-"
    },
    "percentiles3": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "percentiles4": {
        "total": "474",
        "ok": "474",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "percentiles2": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "percentiles3": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "percentiles4": {
        "total": "475",
        "ok": "475",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "percentiles2": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "percentiles3": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "percentiles4": {
        "total": "381",
        "ok": "381",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
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
