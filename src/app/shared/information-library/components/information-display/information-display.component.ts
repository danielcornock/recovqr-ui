import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InformationResponse } from 'src/app/features/dashboard/interfaces/information-response.interface';

@Component({
  selector: 'app-information-display',
  templateUrl: './information-display.component.html',
  styleUrls: ['./information-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationDisplayComponent implements OnInit {
  @Input()
  public information: InformationResponse;

  public informationFields: Array<{ label: string, icon: string, value: string }>;

  public ngOnInit(): void {
    this.informationFields = [
      {
        label: 'INFORMATION.NAME',
        value: this.information.name,
        icon: 'person'
      },
      {
        label: 'INFORMATION.COUNTRY',
        value: this.information.country,
        icon: 'flag'
      },
      {
        label: 'INFORMATION.EMAIL',
        value: this.information.email,
        icon: 'mail'
      },
      {
        label: 'INFORMATION.PHONE',
        value: this.information.telephone,
        icon: 'phone'
      }
    ];
  }
}
