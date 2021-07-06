import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
