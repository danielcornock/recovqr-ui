import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class HttpLoadingService {
  private loadingMap = new Map<string, boolean>();
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public setLoading(isLoading: boolean, url: string): void {
    if (isLoading) {
      this.loadingMap.set(url, true);
      this.loadingSubject.next(true);
    } else if (!isLoading && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }

    if (this.loadingMap.size === 0) {
      this.loadingSubject.next(false);
    }
  }

  public getIsLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable().pipe(
      delay(0)
    );
  }
}
