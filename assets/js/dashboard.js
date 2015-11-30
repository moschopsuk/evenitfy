var App = function ($, Cookies) {
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
         Cookies.set('toggle-sidebar', this.$pageWrapper.hasClass("active"));
    };

    app.checkViewport = function () {
        if (getWidth() >= MOBILE_VIEW) {
            if (Cookies.get('toggle-sidebar') === undefined) {
                this.$pageWrapper.addClass("active");
            } else {
                if(Cookies.get('toggle-sidebar') == 'true') {
                    this.$pageWrapper.addClass("active");
                } else {
                    this.$pageWrapper.removeClass("active");
                }
            }
        } else {
            this.$pageWrapper.removeClass("active");
        }
    };

    return app;
}(jQuery, Cookies);
