import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ShopItem } from '../../interfaces/shop-item.interface';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPageComponent implements OnInit {
  public shopItems: Array<ShopItem>;

  public ngOnInit(): void {
    this.shopItems = [
      {
        name: 'Straight cut stickers',
        description: 'Perfect for the back of a laptop or a phone case',
        id: '2',
        options: [
          {
            id: '1',
            price: 5,
            quantity: 5
          },
          {
            id: '2',
            price: 10,
            quantity: 15
          }
        ]
      },
      {
        name: 'Kiss cut stickers',
        description: 'Perfect for the back of a laptop or a phone case',
        id: '1',
        options: [
          {
            id: '1',
            price: 5,
            quantity: 5
          },
          {
            id: '2',
            price: 10,
            quantity: 15
          }
        ]
      }
    ];
  }
}
