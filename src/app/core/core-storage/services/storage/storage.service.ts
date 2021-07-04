import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setItem(key: string, payload: string): void {
    localStorage.setItem(key, payload);
  }

  public getObject<T>(key: string): T | undefined {
    const stringifiedObject = this.getItem(key);

    if (!stringifiedObject) {
      return;
    }

    return JSON.parse(stringifiedObject);
  }

  public setObject<T>(key: string, item: T): void {
    const stringifiedObject = JSON.stringify(item);

    this.setItem(key, stringifiedObject);
  }
}
