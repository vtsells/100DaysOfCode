define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.title = "Dashboard Sidebar";
        self.states = params;
        self.buttons = [
            new link("Albums", "fas fa-camera-retro", self.states.albums),
            new link("To Do", "fas fa-clipboard-check", self.states.todos),
            new link("Posts", "far fa-comment-alt", self.states.posts)
        ];
        self.isOpen = ko.observable(false);
        self.toggle = function () {
           
            self.isOpen(!self.isOpen());
        };
        function link (text, icon,state) {
            var self = this;
            self.text = text;
            self.icon = icon;
            self.state = state;
            return self;
        };

    };
    return koModel;
});