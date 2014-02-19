var Hello = new function() {
    var say = function() {
        if (new Library().doSomething()) {
            return 'Hello World'
        }
        else
        {
            return 'Hello Everybody'
        }
    }

}