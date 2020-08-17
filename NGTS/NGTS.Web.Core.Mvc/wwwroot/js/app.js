require(['ko'], function (ko) {
    ko.components.register('dashboard', {
        viewModel: { require: "dashboard/scripts/dashboard" },
        template: { require: "text!dashboard/templates/dashboard.html" }
    });

    ko.applyBindings();
});