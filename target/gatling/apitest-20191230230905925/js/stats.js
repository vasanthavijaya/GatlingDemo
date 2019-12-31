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
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4708",
        "ok": "4708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2168",
        "ok": "2168",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1316",
        "ok": "1316",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1920",
        "ok": "1920",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3149",
        "ok": "3149",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4585",
        "ok": "4585",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4695",
        "ok": "4695",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30,
    "percentage": 75
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
        "total": "1485",
        "ok": "1485",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4708",
        "ok": "4708",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2609",
        "ok": "2609",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1069",
        "ok": "1069",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1920",
        "ok": "1920",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3426",
        "ok": "3426",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4677",
        "ok": "4677",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4702",
        "ok": "4702",
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
        "total": "294",
        "ok": "294",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3662",
        "ok": "3662",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1728",
        "ok": "1728",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1391",
        "ok": "1391",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1542",
        "ok": "1542",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3044",
        "ok": "3044",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3635",
        "ok": "3635",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3657",
        "ok": "3657",
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
