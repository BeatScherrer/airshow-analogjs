import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

export enum ThemeMode {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

@Injectable({
  providedIn: "root",
})
export class AppStateService {
  private themeMode$ = new ReplaySubject<ThemeMode>();

  constructor() {
    const theme = this.getThemeFromStorage();
    if (theme) {
      this.setThemeMode(theme);
    } else {
      this.setThemeMode(ThemeMode.LIGHT);
    }
  }

  setThemeMode(themeMode: ThemeMode): void {
    this.themeMode$.next(themeMode);

    this.setItemInStorage("theme", themeMode);

    // NOTE: The theme mode is effectively toggled by adding a class to the body

    const darkModeClassName = "mt-robot-dark";
    const element = document.querySelector("html");
    if (themeMode === ThemeMode.DARK) {
      element?.classList.add(darkModeClassName);
    } else {
      element?.classList.remove(darkModeClassName);
    }
  }

  getThemeMode(): Observable<ThemeMode> {
    return this.themeMode$.asObservable();
  }

  private setItemInStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  private getItemFromStorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  private getThemeFromStorage(): ThemeMode | null {
    const themeString = this.getItemFromStorage("theme");
    if (!themeString) {
      return null;
    }

    return ThemeMode[themeString as keyof typeof ThemeMode];
  }
}
