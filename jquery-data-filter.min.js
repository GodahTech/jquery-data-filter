/**
 Jquery Data Filter JS
 @Filter object by data or data has specific data value
 @author Godahtech | Soluções Digitais - Roberto W. Godoy ::godoy::
 @version 1.0.0
 @url https://github.com/godoyrw/jquery-data-filter
 **/
(function(a){a.fn.filterData=function(b,c){let d=this;return"undefined"==typeof c?d.filter(function(){return"undefined"!=typeof a(this).data(b)}):d.filter(function(){return a(this).data(b)===c})}})(jQuery);
