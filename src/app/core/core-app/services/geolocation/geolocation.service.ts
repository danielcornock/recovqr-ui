import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Coordinates } from '../../interfaces/coordinates.interface';

@Injectable()
export class GeolocationService {
  public getLocation(): Observable<Coordinates | null> {
    const positionSubject = new ReplaySubject<Coordinates | null>(1);

    if (!navigator.geolocation) {
      positionSubject.next(null);
    }

    navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      positionSubject.next({ latitude, longitude });
    });

    return positionSubject.asObservable();
  }
}
