# datatables-light-columnfilter
a dataTables light columnFilter for jquery datatables 1.10 (server side processing only)

**Warning : this only works for server-side processing**

## To install
```bash
bower install datatables-light-columnfilter
```

## To configure :

The main config is an associative object, the key being the column's index.

There is currently only two filter type:
- text
- dateRange

The text filter has one parameter 'time'.
The dateRange parameter has one parameter 'separator'.

There's an example of a custom fitler, it's a DateRange witch allows you to use [bootstrap datepicker](https://github.com/eternicode/bootstrap-datepicker) and its events : [dataTables.lcf.datepicker.fr.js](https://github.com/thansen-solire/datatables-light-columnfilter/blob/master/src/dataTables.lcf.datepicker.fr.js)

```javascript
var config = {
  index: columnConfig,
  (...)
  index: columnConfig
};

var columnConfig = {
  type: (text|dateRange),
  /**
   * time in ms
   * @use with "text" filter
   * @type {int}
   * @default 200
   */
  time: 200,
  /**
    * string separating the start and the end date
    * @use with "dateRange" filter
    * @type {string}
    * @default '~'
    */
  separator : '~'
};
```

## Example
```javascript
var dt = $('#table').DataTable({
  "ajax": {
    "url": "data.json",
    "type": "POST"
  },
  "columns": [
    {
      "orderable": true,
      "searchable": true,
      "data": "name",
      "name": "name",
      "title": "Name"
    },
    {
      "orderable": true,
      "searchable": true,
      "data": "firstname",
      "name": "firstname",
      "title": "First name"
    },
    {
      "orderable": true,
      "searchable": true,
      "data": "dateOfBirth",
      "name": "dateOfBirth",
      "title": "Date of birth"
    }
});
new $.fn.dataTable.ColumnFilter(dt, {
  0: {
    type: 'text'
  },
  2: {
    type: 'dateRange'
  }
});
```
