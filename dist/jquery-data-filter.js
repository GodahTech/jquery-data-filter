/**
 Jquery Data Filter JS
 @description Filter object by data or data has specific data value
<<<<<<< HEAD
 @author Godahtech | Soluções Digitais - Roberto W. Godoy
 @version 1.0.7
 @url https://github.com/godoyrw/jquery-data-filter
 **/

(function ($) {
    /**
     * filterData
     *
     * @param prop
     * @param val
     * @param newval
     * @returns {jQuery||*}
     */
    $.fn.filterData = function (prop, val, newval) {
        /**
         * Self element
         * @type {jQuery}
         */
        var $self = this;

        /**
         * Return match by key
         */
        if (typeof val === 'undefined') {
            return $self.filter(
                function () {
                    return typeof $(this).data(prop) !== 'undefined';
                }
            );
        }

        /**
         * Return match by val
         */
        if (typeof newval === 'undefined') {
            return $self.filter(
                function () {
                    return $(this).data(prop) === val;
                }
            );
        }

       /**
        * Update data
        */
        $self.filter(
            function () {
                return $(this).data(prop) === val;
            }
        ).data(prop, newval);

        return $(this).filterData(prop, newval);
    };

})(jQuery);
