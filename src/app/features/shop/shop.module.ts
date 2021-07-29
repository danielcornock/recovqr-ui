import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/common/common.module';
import { AppFormsModule } from 'src/app/shared/forms/forms.module';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopPageComponent,
    ShopItemComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AppCommonModule,
    AppFormsModule
  ]
})
export class ShopModule { }
