# datatables-light-columnfilter
A dataTables light columnFilter for jquery datatables 1.10 (server side processing only)

**Warning : this only works for server-side processing**

## To install
```bash
bower install datatables-light-columnfilter
```

## To configure

The main config is an associative object, the key being the column's index.

**Now All HTML5 input types and attributes are Valid**
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

The older type `dateRange` is @deprecated

We now support the tags `select` and `input`, in order to work it is necessary to declare the `html` type in a new key-value pair called `html` in configuration object:

html : "input" | "select" | "range"


The new `range` filter is more powerfull the older `dateRange`, this filter now support all HTML5 input types, so if you need to display a range of dates you only need to create an object `{ html : 'range', type :'date' }` in your configuration object.


```javascript
var config = {
  index: columnConfig
};

var columnConfig = {
  html: (input|range|select),

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
  'ajax': {
    'url': 'data.json',
    'type': 'POST'
  },
  'columns': [
    {
      'orderable': true,
      'searchable': true,
      'data': 'name',
      'name': 'name',
      'title': 'Name'
    },
    {
      'orderable': true,
      'searchable': true,
      'data': 'email',
      'name': 'email',
      'title': 'Email'
    },
    {
      'orderable': true,
      'searchable': true,
      'data': 'label',
      'name': 'labelSelected',
      'title': 'Label'
    }
});

new $.fn.dataTable.ColumnFilter(dt, {
  0: {
    html: 'input',
    type: 'text',
    regexp : true
  },
  1: {
    html: 'input',
    type: 'url',
    width: '80px' // you can specify a width for each field
  },
  2: {
    html: 'select',
    values: [{
        value: 'A',  label: 'Label A'
    }, {
        value: 'B',  label: 'Label B'
    }, {
        value: 'C',  label: 'Label C'
    }, {
        value: 'D',  label: 'Label D'
    }, {
        value: 'E',  label: 'Label E'
    }]
  }
});
```


## Beta features

Now we are testing the best way to pass all attributes you want for each filter element. At moment you can declare an object `attr` in each filter and add to this object all attributes you need. This feature is currently only in Beta.

### Example
```javascript
var dt = $('#table').DataTable({
  'ajax': {
    'url': 'data.json',
    'type': 'POST'
  },
  'columns': [
    {
      'orderable': true,
      'searchable': true,
      'data': 'name',
      'name': 'name',
      'title': 'Name'
    },
    {
      'orderable': true,
      'searchable': true,
      'data': 'quantity',
      'name': 'quantity',
      'title': 'Quantity'
    },
    {
      'orderable': true,
      'searchable': true,
      'data': 'dateOfBirth',
      'name': 'dateOfBirth',
      'title': 'Date of birth'
    }
});

new $.fn.dataTable.ColumnFilter(dt, {
  1: {
    html: 'input',
    type: 'number',
    attr: {
      name: 'quantity',
      min: '1',
      max: '5'
    }
  }
});
```
