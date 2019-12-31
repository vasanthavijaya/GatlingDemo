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
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3964",
        "ok": "3964",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2287",
        "ok": "2287",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "882",
        "ok": "882",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2110",
        "ok": "2110",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2813",
        "ok": "2813",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3948",
        "ok": "3948",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3961",
        "ok": "3961",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 36,
    "percentage": 90
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
        "total": "1659",
        "ok": "1659",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3964",
        "ok": "3964",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2392",
        "ok": "2392",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "735",
        "ok": "735",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2043",
        "ok": "2043",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2720",
        "ok": "2720",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3957",
        "ok": "3957",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3963",
        "ok": "3963",
        "ko": "-"
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
    "count": 20,
    "percentage": 100
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
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3418",
        "ok": "3418",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2182",
        "ok": "2182",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "997",
        "ok": "997",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2294",
        "ok": "2294",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3082",
        "ok": "3082",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3257",
        "ok": "3257",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3386",
        "ok": "3386",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 80
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
