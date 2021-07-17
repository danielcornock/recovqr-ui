import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GeolocationService } from 'src/app/core/core-app/services/geolocation/geolocation.service';
import { InformationResponse } from 'src/app/shared/information-library/interfaces/information-response.interface';
import { InformationRouteParams } from '../../constants/information-routes.constant';
import { InformationApiService } from '../../services/information-api/information-api.service';

@Component({
  selector: 'app-information-page',
  templateUrl: './information-page.component.html',
  styleUrls: ['./information-page.component.scss']
})
export class InformationPageComponent implements OnInit {
  public information$: Observable<InformationResponse>;

  constructor(
    private informationApiService: InformationApiService,
    private activatedRoute: ActivatedRoute,
    private geoLocationService: GeolocationService
  ) {}

  public ngOnInit(): void {
    const userId$ = this.getUserId$();

    this.information$ = userId$.pipe(
      switchMap((userId) => this.informationApiService.getInformation(userId))
    );

    userId$.pipe(
      switchMap((userId) => this.geoLocationService.getLocation().pipe(
        switchMap((location) => this.informationApiService.sendTag(userId, location))
      ))
    ).subscribe();
  }

  private getUserId$(): Observable<string> {
    return this.activatedRoute.paramMap.pipe(map((paramMap) => paramMap.get(InformationRouteParams.PageId) || ''));
  }
}
