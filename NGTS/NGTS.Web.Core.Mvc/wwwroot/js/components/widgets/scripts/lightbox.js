define(['ko'], function (ko) {
    var koModel = function (params) {
        var self = this;
        self.isVisible = ko.observable(true);
        self.toggle = function () {
            var oldVal = self.isVisible();
            self.isVisible(!oldVal);
        };

    };
    return koModel;
});