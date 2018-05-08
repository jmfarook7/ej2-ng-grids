# ej2-ng-grids

The Grid component is used to display and manipulate tabular data with configuration options to control the way the data is presented and manipulated. It will pull data from a data source, such as array of JSON objects, `OData web services`, or [`DataManager`](http://ej2.syncfusion.com/angular/documentation/data?utm_source=npm&utm_campaign=grid) binding data fields to columns. Also displaying a column header to identify the field with support for grouped records.

![Grid](https://ej2.syncfusion.com/products/grid/readme.gif)

> Grid is part of Syncfusion Essential JS 2 commercial program. License is available in two models Community and Paid. Please refer the license file for more information. License can be obtained by registering at [https://www.syncfusion.com/downloads/essential-js2](https://www.syncfusion.com/downloads/essential-js2?utm_source=npm&utm_campaign=grid)

## Setup

To install Grid and its dependent packages, use the following command

```sh
npm install @syncfusion/ej2-ng-grids
```

## Resources

* [Getting Started](https://ej2.syncfusion.com/angular/documentation/grid/getting-started.html?utm_source=npm&utm_campaign=grid)
* [View Online Demos](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/default)
* [Product Page](https://www.syncfusion.com/products/angular/data-grid)

## Supported Frameworks

Grid component is also offered in following list of frameworks.

1. [React](https://www.npmjs.com/package/@syncfusion/ej2-react-grids?utm_source=npm&utm_campaign=grid) 
2. [JavaScript (ES5)](https://www.syncfusion.com/products/javascript/data-grid)
3. [ASP.NET Core](https://www.syncfusion.com/products/aspnetcore/data-grid)
4. [ASP.NET MVC](https://www.syncfusion.com/products/aspnetmvc/data-grid)

## Showcase samples

* Expanse Tracker ([Source](https://github.com/syncfusion/ej2-sample-ng-expensetracker), [Live Demo](https://ej2.syncfusion.com/showcase/angular/expensetracker/#/dashboard?utm_source=npm&utm_campaign=grid))
* Loan Calculator ([Source](https://github.com/syncfusion/ej2-sample-ng-loancalculator), [Live Demo](https://ej2.syncfusion.com/showcase/angular/loancalculator/?utm_source=npm&utm_campaign=grid))

## Key Features

* [**Data sources**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/localdata) - Bind the Grid component with an array of JSON objects or DataManager.
* [**Async pipe**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/asyncpipe) - Bind the Grid component with `RxJS.Observable` using `async` pipe.
* [**Sorting and grouping**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/grouping) - Supports n levels of sorting and grouping.
* [**Filtering**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/filtering) - Offers filter bar at each column to filter data.
* [**Paging**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/paging) - Provides the option to easily switch between pages using the pager bar.
* [**Editing**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/normal-edit) - provides the options for create, read, update, and delete operations.
* **Columns** - The column definitions are used as the dataSource schema in the Grid. This plays a vital role in rendering column values in the required format.
  * [**Reordering**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column/reorder) - Allows you to drag any column and drop it at any position in the Grid’s column header row, allowing columns to be repositioned.
  * [**Column Chooser**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/columnchooser) - The column chooser provides a list of column names paired with check boxes that allow the visibility to be toggled on the fly.
  * [**Resizing**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column/columnresizing) - Resizing allows changing column width on the fly by simply dragging the right corner of the column header.
  * [**Freeze**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column/frozenrows) - Columns and rows can be frozen to allow scrolling and comparing cell values.
  * [**Cell Spanning**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column/columnspanning) - Grid cells can be spanned based on the preferred criteria.
  * [**Foreign data source**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/column/foreignkey) - This provides the option to show values from external or lookup data sources in a column based on foreign key/value mapping.
  * [**Cell Styling**](https://ej2.syncfusion.com/angular/documentation/grid/how-to.html?lang=typescript&utm_source=npm&utm_campaign=grid#customize-column-styles) - Grid cell styles can be customized either by using CSS or programmatically.
* [**Selection**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/selection.html) - Rows or cells can be selected in the grid. One or more rows or cells can also be selected by holding Ctrl or Command, or programmatically.
* [**Templates**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/columntemplate) - Templates can be used to create custom user experiences in the grid.
* [**Aggregation**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/aggregatedefault) - Provides the option to easily visualized the Aggregates for column values.
* [**Context menu**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/contextmenu) -The context menu provides a list of actions to be performed in the grid. It appears when a cell, header, or the pager is right-clicked.
* [**Clipboard**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/clipboard) - Selected rows and cells can be copied from the grid
* [**Export**](https://ej2.syncfusion.com/angular/demos/?utm_source=npm&utm_campaign=grid#/material/grid/default-exporting) - Provides the options to Export the grid data to Excel, PDF, and CSV formats.
* [**RTL support**](https://ej2.syncfusion.com/angular/documentation/grid/globalization-and-localization.html?lang=typescript?utm_source=npm&utm_campaign=grid#right-to-left---rtl) - Provides a full-fledged right-to-left mode which aligns content in the Grid control from right to left.
* [**Localization**](https://ej2.syncfusion.com/angular/documentation/grid/globalization-and-localization.html?lang=typescript?utm_source=npm&utm_campaign=grid#localization) - Provides inherent support to localize the UI.

## Support

Product support is available for through following mediums.

* Creating incident in Syncfusion [Direct-trac](https://www.syncfusion.com/support/directtrac/incidents?utm_source=npm&utm_campaign=grid) support system or [Community forum](https://www.syncfusion.com/forums/angular-js2?utm_source=npm&utm_campaign=grid).
* New [GitHub issue](https://github.com/syncfusion/ej2-ng-grids/issues/new).
* Ask your query in Stack Overflow with tag `syncfusion`, `ej2`.

## License

Check the license detail [here](https://github.com/syncfusion/ej2/blob/master/license).

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-ng-grids/blob/master/CHANGELOG.md)


## Installing

To install all dependent packages, use the below command

```
npm install
```

## Building

To compile the source files, use the below command

```
npm run build
```