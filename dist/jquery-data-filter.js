/**
 Jquery Data Filter JS
 @description Filter object by data or data has specific data value
 @author Godahtech | Soluções Digitais - Roberto W. Godoy
 @version 1.0.1
 @url https://github.com/godoyrw/jquery-data-filter
 **/

(function ($) {
    /**
     * filterData
     *
     * @param prop
     * @param val
     * @returns {jQuery||*}
     */
    $.fn.filterData = function (prop, val) {
        /**
         * Self element
         * @type {jQuery}
         */
        var $self = this;

        if (typeof val === 'undefined') {
            return $self.filter(
                function () {
                    return typeof $(this).data(prop) !== 'undefined';
                }
            );
        }
        return $self.filter(
            function () {
                return $(this).data(prop) === val;
            }
        );
    };

})(jQuery);
