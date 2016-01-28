function funcTestStart() {
    mils++;
    if (mils >= 100) {
        mils = 0;
        secs++;
        if (secs >= 60) {
            secs = 0;
            mins++;
            if (mins >= 60) {
                mins = 0;
                hrs++;
            }
        }
    }
}

//test 1
test("Hours starts from '00'", function(){
    function totalHrs () {
        return 0;
    }
    equal(totalHrs(), 0, "Hours starts from '00'");
    reset();
});

//test 2
test("Minutes starts from '00'", function(){
    function totalMins () {
        return 0;
    }
    equal(totalMins(), 0, "Minutes starts from '00'");
    reset();
});

//test 3
test("Seconds starts from '00'", function(){
    function totalSecs () {
        return 0;
    }
    equal(totalSecs(), 0, "Seconds starts from '00'");
    reset();
});



//test 4
test("Milliseconds starts from '00'", function(){
    function totalMils () {
        return 0;
    }
    equal(totalMils(), 0, "Milliseconds starts from '00'");
    reset();
});



//test 5
test("When start button is pushed, number of millis is greater than 0", function(){
     function funcTestMils() {
        funcTestStart();
        return mils;
    }
    notEqual(funcTestStart(), 0, "number of millis is greater than 0");
    reset();
});


//test 6
test("When a hundred centiseconds have lapsed, the number of secs is greater than 0", function(){
    function runctimes(){
        var counter = 0;
        while(counter<100){
            funcTestStart();
            counter++;
        }
        return secs;
    }
    notEqual(runctimes(), 0, "number of secs is greater than 0");
    reset();
});


//test 7
test("When sixty seconds have lapsed, the number of mins is greater than 0", function(){
    function run(){
        var counter = 0;
        while(counter<6000){
            funcTestStart();
            counter++;
        }
        return mins;
    }
    notEqual(run(), 0, "number of mins is greater than 0");
    reset();
});

//test 8
test("When sixty mins have lapsed, the number of hours is greater than 0", function(){
    function run(){
        var counter = 0;
        while(counter<360000){
            funcTestStart();
            counter++;
        }
        return hrs;
    }
    equal(run(), 1, "number of hrs is greater than 0");
    reset();
});

//test 9
test("After start is pressed, mils should be greater than 0 after 1 second", function(assert){
    reset();
    var yes = assert.async();
    startClickHandler();
    setTimeout(function(){
        assert.notEqual(mils, 0, "it works");
        yes();
    }, 1023);
});

//test 10
test("After starting, stop and reset being pressed after 2 seconds should cause mils to be 0", function(assert){
    var yes1 = assert.async();
    setTimeout(function(){
        funcStop();
        reset();
        assert.equal(mils, 0, "mils have been reset");
        yes1();
    }, 2123);
});

//test 11
test("After starting, stop and reset being pressed after 3 seconds should cause secs to be 0", function(assert){
    var yes2 = assert.async();
    startClickHandler();
    setTimeout(function(){
        funcStop();
        reset();
        assert.equal(secs, 0, "secs have been reset");
        yes2();
    }, 3087);
});

//test 12
test("After starting, stop and reset being pressed after 61 seconds should cause mins to be 0", function(assert){
    var yes3 = assert.async();
    startClickHandler();
    setTimeout(function(){
        funcStop();
        reset();
        assert.equal(mins, 0, "mins have been reset");
        yes3();
    }, 61034);
});
