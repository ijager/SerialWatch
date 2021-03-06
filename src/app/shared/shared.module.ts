import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToolbarModule } from 'primeng/toolbar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ColorPickerModule } from 'primeng/colorpicker';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog'

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    CommonModule,
    TranslateModule,
    WebviewDirective,

    // Angular
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Primeng
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToolbarModule,
    AutoCompleteModule,
    ColorPickerModule,
    SelectButtonModule,
    TooltipModule,
    CheckboxModule,
    TableModule,
    DynamicDialogModule,
  ]
})
export class SharedModule {}
