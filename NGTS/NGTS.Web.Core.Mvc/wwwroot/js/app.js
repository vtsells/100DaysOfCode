require(['ko'], function (ko) {
    ko.components.register('dashboard', {
        viewModel: { require: "dashboard/scripts/dashboard" },
        template: { require: "text!dashboard/templates/dashboard.html" }
    });
    ko.components.register('dashboard-albums', {
        viewModel: { require: "dashboard/scripts/dashboard-albums" },
        template: { require: "text!dashboard/templates/dashboard-albums.html" }
    });
    ko.components.register('dashboard-photos', {
        viewModel: { require: "dashboard/scripts/dashboard-photos" },
        template: { require: "text!dashboard/templates/dashboard-photos.html" }
    });
    ko.components.register('dashboard-posts', {
        viewModel: { require: "dashboard/scripts/dashboard-posts" },
        template: { require: "text!dashboard/templates/dashboard-posts.html" }
    });
    ko.components.register('dashboard-sidebar', {
        viewModel: { require: "dashboard/scripts/dashboard-sidebar" },
        template: { require: "text!dashboard/templates/dashboard-sidebar.html" }
    });
    ko.components.register('dashboard-to-do', {
        viewModel: { require: "dashboard/scripts/dashboard-to-do" },
        template: { require: "text!dashboard/templates/dashboard-to-do.html" }
    });
    ko.components.register('dashboard-to-dos', {
        viewModel: { require: "dashboard/scripts/dashboard-to-dos" },
        template: { require: "text!dashboard/templates/dashboard-to-dos.html" }
    });
    ko.applyBindings();
});