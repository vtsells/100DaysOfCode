define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.title = "Top Five Photos";
        self.photos = ko.observableArray();
        self.getPhotos = function () {

            getJSON("/home/GetPhotos", null, function (data) {
                console.log(data.slice(0, 5));
                self.photos(data.slice(0, 5));
            });
        };
        self.getPhotos();

    };
    return koModel;
});