import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { InformationResponse } from 'src/app/features/dashboard/interfaces/information-response.interface';
import { InformationRoutes } from '../../constants/information-routes.constant';
import { InformationApiService } from '../../services/information-api/information-api.service';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  public information$: Observable<InformationResponse>;

  constructor(private informationApiService: InformationApiService, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.information$ = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        const id = paramMap.get(InformationRoutes.PageId) || '';

        return combineLatest([
          this.informationApiService.getInformation(id),
          this.informationApiService.sendTag(id)
        ]);
      }),
      map(([information]) => information)
    );
  }
}
