var Hello = new function() {
    this.say = function() {
        if (new Library().doSomething()) {
            return 'Hello World'
        }
        else
        {
            return 'Hello Everybody'
        }
    }

}