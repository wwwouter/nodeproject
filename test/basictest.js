
exports.testSomething2 = function(test){
    test.expect(1);
    test.ok(1, "this assertion should pass");
    test.done();
};


exports.testSomethingEls = function(test){
    test.expect(666);
    test.ok(667, "this assertion should FAIL!!");
    test.done();
};

