import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tag } from '../../interfaces/tag.interface';
import { TagDetailModalData } from './interfaces/tag-detail-modal-data.interface';

@Component({
  selector: 'app-tag-detail-modal',
  templateUrl: './tag-detail-modal.component.html',
  styleUrls: ['./tag-detail-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagDetailModalComponent implements OnInit {
  public tag: Tag;
  public formattedAddress: string;
  public mapUrl: string;

  public readonly translateKey = 'DASHBOARD.TAG_MODAL.';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private dialogData: TagDetailModalData
  ) { }

  public ngOnInit(): void {
    this.tag = this.dialogData.tag;
    this.formattedAddress = this.tag.address.join(', ');
    this.generateMapUrl();
  }

  public openInMap(): void {
    window.open(this.mapUrl);
  }

  private generateMapUrl(): void {
    const { latitude, longitude } = this.tag.coordinates;
    this.mapUrl = `https://maps.google.com/maps?q=${latitude},%20${longitude}&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed`;
  }
}
