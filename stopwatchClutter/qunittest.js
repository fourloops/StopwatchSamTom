test("Hours starts from '00'", function(){
    equal(totalHrs(), 0, "Hours starts from '00'");
});
test("Minutes starts from '00'", function(){
    equal(totalMins(), 0, "Minutes starts from '00'");
});
test("Seconds starts from '00'", function(){
    equal(totalSecs(), 0, "Seconds starts from '00'");
});
test("Milliseconds starts from '00'", function(){
    equal(totalMils(), 0, "Milliseconds starts from '00'");
});
test("When start button is pushed, number of millis is greater than 0", function(){
    notEqual(totalMilspone(), 0, "number of millis is greater than 0");
});
