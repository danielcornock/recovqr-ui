import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthenticatedPageContainerComponent } from './pages/authenticated-page-container/authenticated-page-container.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    AuthenticatedPageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatIconModule
  ]
})
export class CoreComponentsModule { }
