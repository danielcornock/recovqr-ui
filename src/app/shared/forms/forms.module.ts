import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppCommonModule } from 'src/app/common/common.module';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormInputErrorHandlerDirective } from './directives/form-error-handler/form-input-error-handler.directive';
import { FormErrorsPipe } from './pipes/form-errors/form-errors.pipe';
import { CustomErrorStateMatcher } from './providers/error-state-matcher.provider';

@NgModule({
  declarations: [
    FormErrorsPipe,
    FormErrorComponent,
    FormInputErrorHandlerDirective
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormErrorsPipe,
    FormErrorComponent,
    FormInputErrorHandlerDirective
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher }
  ]
})
export class AppFormsModule { }
