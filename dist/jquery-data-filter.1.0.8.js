/**
 Jquery Data Filter JS
 @description Filter/Update attribute data by specific data value
 @author Godahtech | Soluções Digitais - Roberto W. Godoy
 @version 1.0.8
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
        * Update data match by val
        */
        $self.filter(
            function () {
                return $(this).data(prop) === val;
            }
        ).data(prop, newval);

        /**
         * Return match by newval
         */
        return $(this).filterData(prop, newval);
    };

})(jQuery);