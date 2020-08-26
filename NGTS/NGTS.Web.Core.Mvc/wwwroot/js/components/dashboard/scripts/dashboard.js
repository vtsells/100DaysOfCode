define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.title = "Dashboard";
        self.states = {};
        self.states.home = ko.observable(true);
        self.states.photos = ko.observable(false);
        self.states.albums = ko.observable(false);
        self.states.posts=ko.observable(false);
        self.states.currentState = ko.observable(self.states.home);
        self.states.changeState = function (state) {
            var currentState = self.states.currentState();
            currentState(false);
            state(true);
            self.states.currentState(state);
        };
    };
    return koModel;
});