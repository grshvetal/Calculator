$('document').ready(function () {
    // VARIABLES TO BE USED --------------------------------------------------
    // Variables to store digits of a number
    var d0 = 0,
        d1 = 0,
        d2 = 0,
        d3 = 0,
        d4 = 0,
        d5 = 0,
        d6 = 0,
        d7 = 0;
    var pointFlag = false;
    var pointValue = 0.0;
    var value = 0,
        value1 = 0,
        value2 = 0;
    var clickCounter = 0,
        opclickCounter = 0;
    var opCode, answer;
    var btn_no;
    // FUNCTIONS TO BE USED (totol functions : 7) -------------------------------------------------
    function digitStore() { // function 1: Stores digits of a number (up to 8 digits)
        switch (clickCounter) {
            case 1:
                d0 = btn_no;
                break;
            case 2:
                d1 = d0;
                d0 = btn_no;
                break;
            case 3:
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
                break;
            case 4:
                d3 = d2;
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
                break;
            case 5:
                d4 = d3;
                d3 = d2;
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
                break;
            case 6:
                d5 = d4;
                d4 = d3;
                d3 = d2;
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
                break;
            case 7:
                d6 = d5;
                d5 = d4;
                d4 = d3;
                d3 = d2;
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
                break;
            case 8:
                d7 = d6;
                d6 = d5;
                d5 = d4;
                d4 = d3;
                d3 = d2;
                d2 = d1;
                d1 = d0;
                d0 = btn_no;
        }
    }

    function pointValuation() { //function 2: Calculates and stores one decimal at a time (which will be added to a value)
        pointValue = btn_no / (Math.pow(10, clickCounter));
    }

    function display(xyz) { //function 3: just displays number on the display
        $(".display").html('' + xyz);
    }

    function valuation() { //function 4: Calculates a number/value from stores digits
        value = d0 + d1 * 10 + d2 * 100 + d3 * 1000 + d4 * 10000 + d5 * 100000 + d6 * 1000000 + d7 * 10000000;
    }

    function clear() { //function 5: clears variables
        d0 = 0;
        p1 = 0;
        d1 = 0;
        p2 = 0;
        d2 = 0;
        p3 = 0;
        d3 = 0;
        p4 = 0;
        d4 = 0;
        p5 = 0;
        d5 = 0;
        p6 = 0;
        d6 = 0;
        p7 = 0;
        d7 = 0;
        p8 = 0;
        value = 0;
        pointValue = 0.0;
        pointFlag = false;
        clickCounter = 0;
    }

    function operate() { //function 6: Performs a given operation on the numbers
        switch (opCode) {
            case 1:
                answer = value1 + value2;
                break;
            case 2:
                answer = value1 - value2;
                break;
            case 3:
                answer = value1 * value2;
                answer = answer.toFixed(2);
                break;
            case 4:
                answer = value1 / value2;
                answer = answer.toFixed(2);
        }
        display(answer);
    }

    function go() { //Function 7: 
        if (opclickCounter == 1) { //if it is a first operation key press, store the number as a value-1
            value1 = value;
            clear();
        } else {
            // if it is a second operation key press, store the number as a value-2 and 
            // operate on value-1 & value-2 and
            // store result as a value-1
            // clear variables
            value2 = value;
            operate();
            value1 = answer;
            clear();
        }
    }

    // OPERATION KEY PROCEDURES -------------------------------------------

    $("#plus").on("click", function () {
        opclickCounter++;
        go();
        opCode = 1;
    });
    $("#minus").on("click", function () {
        opclickCounter++;
        go();
        opCode = 2;
    });
    $("#multi").on("click", function () {
        opclickCounter++;
        go();
        opCode = 3;
    });
    $("#division").on("click", function () {
        opclickCounter++;
        go();
        opCode = 4;
    });
    $("#equal").on("click", function () {
        opclickCounter++;
        go();
    });
    $("#ac").on("click", function () {
        clear();
        value1 = 0;
        value2 = 0;
        value = 0;
        display("");
        opclickCounter = 0;
        opCode = 0;
        answer = 0;
        pointFlag = false;
    });
    $("#ce").on("click", function () {
        clear();
        display("0");
    });

    // NUMBER KEY PROCEDURES  -------------------------------------------------

    $("#zero").on("click", function () {
        btn_no = 0;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#1").on("click", function () {
        btn_no = 1;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#2").on("click", function () {
        btn_no = 2;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#3").on("click", function () {
        btn_no = 3;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#4").on("click", function () {
        btn_no = 4;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#5").on("click", function () {
        btn_no = 5;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#6").on("click", function () {
        btn_no = 6;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#7").on("click", function () {
        btn_no = 7;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#8").on("click", function () {
        btn_no = 8;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });
    $("#9").on("click", function () {
        btn_no = 9;
        clickCounter++;
        if (pointFlag) {
            pointValuation();
            value = value + pointValue;
        } else {
            digitStore();
            valuation();
        }
        display(value);
    });

    // POINT KEY PROCEDURE ----------------------------

    $("#point").on("click", function () {
        pointFlag = true;
        clickCounter = 0;
        display(value + ".");
    });

});