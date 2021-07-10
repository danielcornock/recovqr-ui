import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthenticatedPageContainerComponent } from './pages/authenticated-page-container/authenticated-page-container.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    AuthenticatedPageContainerComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class CoreComponentsModule { }
