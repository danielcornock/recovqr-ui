import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InformationResponse } from 'src/app/shared/information-library/interfaces/information-response.interface';

@Component({
  selector: 'app-information-display',
  templateUrl: './information-display.component.html',
  styleUrls: ['./information-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationDisplayComponent implements OnInit {
  @Input()
  public information: InformationResponse;

  public informationFields: Array<{ label: string, icon: string, value?: string, action?(): void }>;

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
        icon: 'mail',
        action: () => window.open(`mailto:${this.information.email}`)
      },
      {
        label: 'INFORMATION.PHONE',
        value: this.information.telephone,
        icon: 'phone',
        action: () => window.open(`tel:${this.information.telephone}`)
      },
      {
        label: 'INFORMATION.TWITTER',
        value: this.information.twitter,
        icon: 'alternate_email',
        action: () => window.open(`https://twitter.com/${this.information.twitter}`)
      }
    ];
  }
}
