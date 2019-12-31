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
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "953",
        "ok": "953",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "391",
        "ok": "391",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "percentiles1": {
        "total": "377",
        "ok": "377",
        "ko": "-"
    },
    "percentiles2": {
        "total": "438",
        "ok": "438",
        "ko": "-"
    },
    "percentiles3": {
        "total": "506",
        "ok": "506",
        "ko": "-"
    },
    "percentiles4": {
        "total": "789",
        "ok": "789",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 39,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
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
        "total": "3.636",
        "ok": "3.636",
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
        "total": "371",
        "ok": "371",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "953",
        "ok": "953",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "121",
        "ok": "121",
        "ko": "-"
    },
    "percentiles1": {
        "total": "440",
        "ok": "440",
        "ko": "-"
    },
    "percentiles2": {
        "total": "474",
        "ok": "474",
        "ko": "-"
    },
    "percentiles3": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles4": {
        "total": "873",
        "ok": "873",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
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
        "total": "1.818",
        "ok": "1.818",
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
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "318",
        "ok": "318",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "38",
        "ko": "-"
    },
    "percentiles1": {
        "total": "308",
        "ok": "308",
        "ko": "-"
    },
    "percentiles2": {
        "total": "332",
        "ok": "332",
        "ko": "-"
    },
    "percentiles3": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "percentiles4": {
        "total": "402",
        "ok": "402",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
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
        "total": "1.818",
        "ok": "1.818",
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
