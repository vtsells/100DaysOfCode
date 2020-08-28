define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.title = "My Albums";
        self.albums = ko.observableArray();
        self.isLoading = ko.observable(true);
        self.getAlbums = function () {

            getJSON("/home/GetAlbums", null, function (data) {
                self.isLoading(false);
                self.albums(data);
            });
        };
        self.getAlbums();
    };
    function album() {

    }
    return koModel;
});