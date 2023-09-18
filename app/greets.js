(function(exports) {

    function greet(name) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var now  = new Date();
        var formattedDate = now.toLocaleDateString("en-US", options);
        return `Hello, ${name}! Today is ${formattedDate}`;
    }

    exports.greet = greet;

})(this);
