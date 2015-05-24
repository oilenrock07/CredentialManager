(function ($) {
    $.fn.showControl = function () {
        return this.each(function () {
            $(this).removeClass('hidden');
        });
    };

    $.fn.hideControl = function () {
        return this.each(function () {
            $(this).addClass('hidden');
        });
    };
}(jQuery));