(function(window, document) {
  var factory = function($, dataTable) {
    'use strict';

    var Column = function(dataTable, index, dataTableColumn, options) {
      var
        self = this,
        defaultOptions
      ;

      if (options.type in ColumnFilter.filter) {
        defaultOptions = $.extend({}, ColumnFilter.filter[options.type]);
      } else {
        defaultOptions = {};
      }
      self.options = $.extend({}, defaultOptions, options);

      if ('dom' in self.options) {
        self.dom = self.options.dom;
      } else {
        self.dom = function(){}
      }

      if ('search' in self.options) {
        self.search = self.options.search;
      } else {
        self.search = function(){}
      }

      self.dataTable = dataTable;
      self.dataTableColumn = dataTableColumn;
      self.index = index;
    }

    var ColumnFilter = function(dataTable, options) {
      var self = this;

      self.columns = [];
      self.dataTable = null;
      self.init(dataTable, options);
    };

    ColumnFilter.prototype = {
      init: function(dataTable, options){
        var
          self = this,
          tr = $('<tr>').appendTo(dataTable.table().header())
        ;

        self.dataTable = dataTable;

        self.dataTable.columns().eq(0).each(function(index){
          var
            columnOptions = index in options ? options[index] : {},
            column = new Column(
              dataTable,
              index,
              self.dataTable.column(index),
              columnOptions
            ),
            th = $('<th>').appendTo(tr)
          ;
          self.columns.push(column);

          column.dom(th);
        });
      },
      addFilter: function(name, filter){
        ColumnFilter.filter[name] = filter;
      }
    };

    ColumnFilter.default = {
      type: 'text'
    };

    ColumnFilter.filter = {};

    ColumnFilter.filter.text = {
      /**
       * Build the form DOM element
       *
       * @returns {jQuery}
       */
      dom: function(th){
        var self = this;

        self.elements = $('<input>', {
          type: 'text'
        }).appendTo(th);

        self.elements.keyup(function(){
          self.dataTableColumn
              .search(self.search())
              .draw();
        });

        return this.elements;
      },
      /**
       * Return the searched string
       *
       * @returns {string}
       */
      search: function(){
        return this.elements.val();
      }
    };

    ColumnFilter.filter.dateRange = {
      separator: '~',
      dom: function(th){
        var self = this;

        self.elements = $('<input>', {
          type: 'text'
        }).add($('<input>', {
            type: 'text'
        })).appendTo(th);

        self.elements.focusout(function(){
          self.dataTableColumn
              .search(self.search())
              .draw();
        });

        return self.elements;
      },
      search: function(){
        var search = [];
        this.elements.each(function(){
          search.push($(this).val());
        });
        return search.join(this.options.separator);
      }
    };

    $.fn.dataTable.ColumnFilter = ColumnFilter;
    $.fn.DataTable.ColumnFilter = ColumnFilter;

    return ColumnFilter;
  };

  // Define as an AMD module if possible
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'datatables'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'), require('datatables'));
  } else if (jQuery && !jQuery.fn.dataTable.ColumnFilter) {
    // Otherwise simply initialise as normal, stopping multiple evaluation
    factory(jQuery, jQuery.fn.dataTable);
  }
})(window, document);
