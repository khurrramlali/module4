(function (window) {
    var speakWord = "Goodbye";
    var byeSpeaker = function (name) {
        console.log(speakWord + " " + name);
    }

    window.byeSpeaker = byeSpeaker;

})(window);
