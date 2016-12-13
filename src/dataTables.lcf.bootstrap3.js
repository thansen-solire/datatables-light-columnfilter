/*!
 * @author Thomas <thansen@solire.fr>
 * @licence CC BY-NC 4.0 http://creativecommons.org/licenses/by-nc/4.0/
 *
 * Wrapper module for bootstrap datepicker
 *
 * https://github.com/eternicode/bootstrap-datepicker
 * to install : bower install bootstrap-datepicker#1.3.*
 * or add : "bootstrap-datepicker": "1.3.*" in your bower.json
 */
(function (window, document) {
  var factory = function ($, ColumnFilter) {
    'use strict';

    // dans bootstrap
    ColumnFilter.filter.selectBase = $.extend(true, {}, ColumnFilter.filter.select);
    ColumnFilter.filter.select = {};
    $.extend(
      ColumnFilter.filter.select,
      ColumnFilter.filter.selectBase,
      {
        dom: function (th) {
          ColumnFilter.filter.selectBase.dom.call(this, th);

          this.elements.addClass('form-control input-sm');

          return this.elements;
        }
      }
    );

    ColumnFilter.filter.inputBase = $.extend(true, {}, ColumnFilter.filter.input);
    ColumnFilter.filter.input = {};
    $.extend(
      ColumnFilter.filter.input,
      ColumnFilter.filter.inputBase,
      {
        dom: function (th) {
          ColumnFilter.filter.inputBase.dom.call(this, th);

          this.elements.addClass('form-control input-sm');

          return this.elements;
        }
      }
    );

    ColumnFilter.filter.rangeBase = $.extend(true, {}, ColumnFilter.filter.range);
    ColumnFilter.filter.range = {};
    $.extend(
        ColumnFilter.filter.range,
        ColumnFilter.filter.rangeBase,
        {
          dom: function (th) {
            ColumnFilter.filter.rangeBase.dom.call(this, th);

            this.elements.addClass('form-control input-sm');

            return this.elements;
          }
        }
    );
  };

  // Define as an AMD module if possible
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'datatables-light-columnfilter'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'), require('datatables-light-columnfilter'));
  } else if (jQuery) {
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable.ColumnFilter);
  }
})(window, document);
