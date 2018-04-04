import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnDirective, ColumnsDirective } from './columns.directive';
import { AggregateColumnDirective, AggregateColumnsDirective } from './aggregate-columns.directive';
import { AggregateDirective, AggregatesDirective } from './aggregates.directive';
import { GridComponent, FilterService, PageService, SelectionService, SortService, GroupService, ReorderService, RowDDService, DetailRowService, ToolbarService, AggregateService, SearchService, VirtualScrollService, EditService, ResizeService, ExcelExportService, PdfExportService, CommandColumnService, ContextMenuService, FreezeService, ColumnMenuService, ColumnChooserService, ForeignKeyService } from './grid.component';

/**
 * NgModule definition for the Grid component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        GridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ],
    exports: [
        GridComponent,
        ColumnDirective,
        ColumnsDirective,
        AggregateColumnDirective,
        AggregateColumnsDirective,
        AggregateDirective,
        AggregatesDirective
    ]
})
export class GridModule { }