# datatables-light-columnfilter
a dataTables light columnFilter for jquery datatables 1.10 (server side processing only)

**Warning : this only works for server-side processing**

## To install
```bash
bower install datatables-light-columnfilter
```

## To configure :

The main config is an associative object, the key being the column's index.


**Now All HTML5 input types and Attributes are Valid**
- text
- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

The Older Type dateRange are @deprecated


We support now the Tag **select** and **input**, for that works, now is necesary declare the HTML type in a new key,value pair call html in configuration object:

html : "input" | "select" | "range"


The new "range"  filter is more powerfull the older dateRange, this filter now support all HTML5 input tipes, so if you need display a range of dates only need create a object { html : "range", type : "date" }  in your configuration object


```javascript
var config = {
  index: columnConfig,

};

var columnConfig = {
  html: (input|range|select)

  /**
   * HTML5 type data
   * @use with "input" and "range" filter
   * @type {String}
   * @default text
   */  
  type: (text|color|date|datetime|datetime-local|email|month|number|range|search|tel|time|url|week),
  /**
   * time in ms
   * @use with "input" filter
   * @type {int}
   * @default 200
   */
  time: 200,
  /**
   * if the search is send to server to search like regular expression instead a plain text
   * @use with "input" filter
   * @type {boolean}
   * @default false
   */
  regexp: true,


  /**
   * values is a Array
   * @use with "select" filter
   * @type {array}
   */
  values: [{
      value: 'A',  label: "Label A"
  }, {
      value: 'B',  label: "Label B"
  }, {
      value: 'C',  label: "Label C"
  }, {
      value: 'D',  label: "Label D"
  }, {
      value: 'E',  label: "Label E"
  }]

};
```

### Example
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
      "data": "email",
      "name": "email",
      "title": "Email"
    },
    {
      "orderable": true,
      "searchable": true,
      "data": "label",
      "name": "labelSelected",
      "title": "Label"
    }
});

new $.fn.dataTable.ColumnFilter(dt, {
  0: {
    html: 'input'
    type: 'text',
    regexp : true
  },
  1: {
    html: 'input',
    type: 'url',
    width: '80px' // you can specify a width for each field
  }
  2: {
    html: 'select',
    values: [{
        value: 'A',  label: "Label A"
    }, {
        value: 'B',  label: "Label B"
    }, {
        value: 'C',  label: "Label C"
    }, {
        value: 'D',  label: "Label D"
    }, {
        value: 'E',  label: "Label E"
    }]
  }
});
```


## Beta features

Now we are testing a best way to pass all attributes your want for each filter element. At moment you can declare a object "attr" in each filter and add to this object all attributes your need. This feature now is only in Beta.

### Example
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
      "data": "quantity",
      "name": "quantity",
      "title": "Quantity"
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
  1: {
    html: 'input',
    type: 'number',
    attr:{
      name:"quantity",
      min:"1",
      max:"5",
    }
  }
});
```
