# Changelog

## [Unreleased]

## 16.1.41 (2018-05-09)

### Grid

#### Bug Fixes

- `dataStateChange` event is now trigged when `pageSize` is changed.
- Provided support for optimizing frozen content height with auto wrap.

## 16.1.40 (2018-05-08)

### Grid

#### Bug Fixes

- `dataStateChange` event is now trigged when `pageSize` is changed.
- Group and caption aggregate is now working with `async` pipe.
- Now grid refreshed when group and caption aggregates is emptied.
- In Remote data, the `getSelectedRecords` method returns proper count with `persistSelection` enabled.
- Script error thrown when set `dataSource` and `columns` is provided at the same time fixed.

## 16.1.39 (2018-05-05)

### Grid

#### Bug Fixes

- Memory leak issue resolved.

## 16.1.38 (2018-05-03)

### Grid

#### Bug Fixes

- Duplicate values updating in batch changes for complex property is resolved.
- Creating multiple elements while hovering for tooltip issue is resolved.
- Lint issue occurs in custom toolbar with latest typescript version is resolved.
- Undoing delete operation only restores frozen content in batch edit fixed.

## 16.1.37 (2018-04-24)

### Grid

#### Bug Fixes

- Script error thrown while deleting all records with aggregates and `Urladaptor` is resolved.
- `FilterBar` message is not updated while setting filter settings in `setProperties` method is resolved.
- Excel Filter dialog not updated while programmatically filter the column is resolved.
- With virtual scrolling grid refreshes constantly issue is resolved.

## 16.1.35 (2018-04-17)

### Grid

#### Bug Fixes

- Maximum call stack issue while filtering date column with `disablePageWiseAggregates` is resolved.
- Provided locale support for custom filter labels and column chooser.
- Between operator provides incorrect result in Excel filter issue fixed.
- Content rendering delayed while using virtual scrolling with grouping when scrolling horizontally is resolved.

#### Breaking Changes

- The Locale properties such as `OK`, `Filter`, `Clear` are removed instead use `OKButton`, `FilterButton`, `ClearButton`.

## 16.1.34 (2018-04-10)

### Grid

#### Bug Fixes

- Pager Dropdown values is not updated while dynamically changing the Page size issue is resolved.
- Provide locale column format support for excel-export.
- Setting filter Properties through `setProperties` method is resolved.
- Changing frozen columns from null throws script error is resolved.
- Excel exporting group caption shows field name instead of header text issue is resolved.
- String values not accepted for methods from window in custom filter menu template is resolved.

## 16.1.33 (2018-04-04)

### Grid

#### Bug Fixes

- Updating column object for dynamically bounded columns.

## 16.1.32 (2018-03-29)

### Grid

#### Bug Fixes

- Grid refreshes before insert operation completed resolved.
- Grid refresh prevented when column showing or hiding dynamically through `hideAtMedia`.
- Initial multi sorted column icons is ordered correctly.
- Removed filter bar border when using compatibility theme.
- Provide complex data editing support.
- Grouping with search always shown the spinner when data source has no value is resolved.
- Filtering the column while field has underscore value is resolved.
- Aggregate returns the null value when grouped has no aggregate field is resolved.
- Header text shown along with header template is resolved.

## 16.1.30 (2018-03-20)

### Grid

#### Bug Fixes

- Column properties is not persisted after reordering columns resolved.
- `args.cancel`  has included in `rowSelecting` event while select the rows through method and user interaction.

## 16.1.29 (2018-03-13)

### Grid

#### Bug Fixes

- `args.cancel`  has included in `rowSelecting` event.
- Dynamically changing filter settings does not update `Filterbar` value and filter status message is resolved.
- Batch edit should close on clicking outside grid and on pressing enter or tab key is resolved.
- `updateRow` method is provided for Normal editing and Dialog editing.
- Duplicate columns added in group drop area issue resolved.

## 16.1.28 (2018-03-09)

### Grid

#### Bug Fixes

- Minimum height for edit dialog is provided.
- Identity column is not disabled when adding resolved.
- Script error thrown when destroy the Grid with custom toolbar template issue resolved.
- Batch editing save action shows empty grid issue resolved.
- `currentViewData` is not changed in remote data editing issue resolved.

## 16.1.24 (2018-02-22)

### Grid

#### New Features

- New Excel like column filtering option is added.
- Added Look-up table or foreign key data binding to grid column.
- Row height adjustment feature added.

#### Bug Fixes

- Angular and React `enablePersistence` issue resolved.

#### Breaking Changes

- All grid enum property values are changed from camel casing to pascal casing. Please refer the below link for complete API changes from `v15.4.23` to `v16.1.24`.
[Migration](http://ej2.syncfusion.com/documentation/grid/migration.html).

## 15.4.30-preview (2018-02-14)

### Grid

#### Bug Fixes

- Exporting is working fine with template column.
- Aggregate with frozen columns scroller is working fine

## 15.4.29-preview (2018-02-07)

### Grid

#### Bug Fixes

- Renamed event `dataSourceChange` to `dataSourceChanged`.

## 15.4.28-preview (2018-01-30)

### Grid

#### Bug Fixes

- Child Grid editing dialog closes when clicking on edit element.
- Printing window is blocking by browser and column hiding.
- `getSelectedRecords` method returns selected records properly with checkbox persist selection fixed.
- Aggregate with frozen columns scroller is working fine.

## 15.4.27-preview (2018-01-30)

### Grid

#### Bug Fixes

- Disable edit, delete button when Grid is empty.
- `ShowConfirmDialog` is not showing in Command Column.
- Grid Validation message is not shown in EJ2 compatibility theme.
- Checkbox selection fixes with virtual scrolling.
- Provide support to add row with rowindex in AddRecord method.

## 15.4.26-preview (2018-01-23)

### Grid

#### Bug Fixes

- Validation error message partially hidden when grid has single record in add and update action.
- Two way binding for headers on grid not working.
- Child grid collapses after save operation fixed.
- Checkbox column binding with data source is not working fixed.
- Misalignment occurs in frozen columns without height property fixed.

## 15.4.25-preview (2018-01-09)

### Grid

#### New Features

- `isBlob` argument added in export methods to get blob data export complete events.

#### Bug Fixes

- Check Select all not working when refreshing the Grid header in run time.
- Column chooser throws script error in IE 11 while destroying the component.
- Column checkbox filtering shows no records while grid have menu filtering.

## 15.4.24-preview (2018-01-10)

### Grid

#### Bug Fixes

- Filter menu clear action throws script error with column menu.
- Add row misaligns with header when grid has hidden columns.
- Support for `rowSelected` event for template column.
- Date filtering request pass as string when reloading.
- Script error on add record by hidden column.
- Row deselect event not fires in check box selection.
- Sorting and grouping failed on complex data.
- Last and next page options are enabled when data source is empty.
- Default cursor not displayed after invoke grid refresh method.

## 15.4.23-preview (2017-12-27)

### Common

#### New Features

- Added typing file for ES5 global scripts (`dist/global/index.d.ts`).

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling.

### Grid

#### Bug Fixes

- Header content is not scrolling while adding a record in empty Grid.
- `displayAsCheckbox` not working for numeric values.
- Filtered value not persisting in filter menu with date picker.
- Reordering with filter menu throws script error.
- Exporting Grouped Grid with Header not working.

## 15.4.22-preview (2017-12-14)

### Grid

#### New Features

- `recordDoubleClick` event added.

#### Bug Fixes

- Script error when pdf exporting with null values.

#### Breaking Changes

- Now `ColumnChooser` module must be injected to use column chooser feature.

#### Bug Fixes

- Grid height 100% is not working fixed.

## 15.4.21-preview (2017-12-08)

### Grid

#### Bug Fixes

- Script error when exporting with Custom aggregate fixed.
- State persistence in angular is not working fixed.
- Exporting with stacked header is not working fixed.
- Alignment issue with checkbox column fixed.
- Cancelling edit with edit Template fixed.
- Stacked header alignment issue fixed.
- Disabling Edit confirm dialog is not working issue fixed.
- Script error throws when save the record after edit in IE11 fixed.
- Editing not working after batch save in action begin event fixed.
- Deleting unsaved record throws Script error fixed.

## 15.4.20-preview (2017-12-01)

### Grid

#### Bug Fixes

- Column format is not applied when type is specified fixed
- Value search in checkbox filter is not worked for complex binding fixed
- Editing is not worked with stacked header fixed
- Numeric Edit column didn't get modified value when Enter key press fixed
- Null shows as date value in date type column fixed
- Edit Confirm Dialog is not working properly in batch edit mode fixed

## 15.4.19-preview (2017-11-23)

### Grid

#### Bug Fixes

- Script error resolved when exporting Grid data.
- Provided filter `menu` support for `template` columns.
- Localization is not found for `numeric` and `date` filter menu issue fixed.

## 15.4.18-preview (2017-11-16)

### Grid

#### Bug Fixes

- `enum` support for toolbar items provided.
- Edit state not changed when changing `dataSource` issue fixed.
- Duplicate service injection in React fixed.

## 15.4.17-preview (2017-11-13)

### Grid

Grid component is used to display and manipulate tabular data with configuration options to control the way the data is presented and manipulated.

- **Data sources** - Bind the Grid component with an array of JavaScript objects or DataManager.
- **Sorting and grouping** - Supports n levels of sorting and grouping.
- **Selection** - Provides the option to select the grid rows single or multiple.
- **Filtering** - Offers filter bar or menu , or checkbox at each column to filter data.
- **Editing** -  Provides the options to dynamically insert, delete and update records.
- **Virtualization** - Provides the options to load large amount of data without performance degradation.
- **Aggregates** - Provides built in types are sum , average, min, max, count.
- **Paging** - Provides the option to easily switch between pages using the pager bar.
- **Reordering** - Allows you to drag any column and drop it at any position in the Grid’s column header row, allowing columns to be repositioned.
- **Resize** - Allow you to resize the grid column width dynamically.
- **Frozen Rows And Columns** - Provides the options to freeze certain rows or columns to scroll remaining movable content.
- **Clipboard** - Provides an option to copy selected rows or cells data into clipboard.
- **Column Spanning** - Provides an option to allows to span the multiple adjacent cells.
- **Stacked Header** - It can be stacked or grouped in order to show multiple level of column headers.
- **Hierarchy Grid** - It is used to display table data in hierarchical structure which can show or hide by clicking on expand or collapse button.
- **Print and Exporting** - Provides the option to print and exporting grid records.
- **RTL** - Provides a full-fledged right-to-left mode which aligns content in the Grid component from right to left.
- **Localization** - Provides inherent support to localize the UI.
