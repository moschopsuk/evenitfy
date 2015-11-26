var App = function ($) {
    var app = {},
        MOBILE_VIEW = 992;

    function getWidth() {
      return window.innerWidth;
    }

    app.init = function () {
        this.cacheElements();
        this.bindEvents();
        this.checkViewport();
    };

    app.cacheElements = function () {
        this.$viewport    = $(window);
        this.$pageWrapper = $("#page-wrapper");
        this.$toggleBtn   = $("#toggle-sidebar");
    };

    app.bindEvents = function () {
        this.$viewport.on('resize', this.viewportResize.bind(this));
        this.$toggleBtn.on('click', this.toggleSidebar.bind(this));
    };

    app.viewportResize = function () {
        this.checkViewport();
    };

    app.toggleSidebar = function (e) {
        this.$pageWrapper.toggleClass('active');
    };

    app.checkViewport = function () {
        if (getWidth() >= MOBILE_VIEW) {
            this.$pageWrapper.addClass("active");
        } else {
            this.$pageWrapper.removeClass("active");
        }
    };

    return app;
}(jQuery);
