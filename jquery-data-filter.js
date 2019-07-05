/**
 Jquery Data Filter JS
 @Filter object by data or data has specific data value
 @author Godahtech | Soluções Digitais - Roberto W. Godoy ::godoy::
 @version 1.0.0
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
        let $self = this;

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
