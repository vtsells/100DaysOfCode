define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.title = "Dashboard Sidebar";
        self.states = params;
        console.log(self.states);
        self.buttons = [
            new link("Home","fas fa-home",self.states.home),
            new link("Photos", "fas fa-camera-retro", self.states.photos),
            new link("Albums", "fas fa-compact-disc", self.states.albums),
            new link("Posts", "far fa-comment-alt", self.states.posts)
        ];
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