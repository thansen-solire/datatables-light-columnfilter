# datatables-light-columnfilter
a dataTables light columnFilter for jquery datatables 1.10 (server side processing only)

Warning : this only works for server-side processing 

To install 
```bash
bower install datatables-light-columnfilter
```

To configure
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
  "0": {
    "type": "text"
  },
  "2": {
    "type": "dateRange"
  }
});
```
