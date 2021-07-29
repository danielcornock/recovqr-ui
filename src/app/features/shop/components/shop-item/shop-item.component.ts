import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShopItem } from '../../interfaces/shop-item.interface';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopItemComponent implements OnInit {
  @Input()
  public shopItem: ShopItem;

  @Output()
  public addToCard = new EventEmitter<{ itemId: string, optionId: string }>();

  public quantityControl: FormControl;

  public ngOnInit(): void {
    this.quantityControl = new FormControl(this.shopItem.options[0].id);
  }

  public addToCart(): void {
    this.addToCard.emit({ itemId: this.shopItem.id, optionId: this.quantityControl.value });
  }
}
