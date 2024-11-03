import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService, TMode } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, AsyncPipe, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentMode$!: Observable<TMode>;
  private appThemeService: ThemeService = inject(ThemeService);

  constructor() {
    this.currentMode$ = this.appThemeService.getMode();
  }

  public toggleMode(): void {
    const newMode: TMode =
      this.appThemeService.getModeValue() === 'light' ? 'dark' : 'light';
    this.appThemeService.setMode(newMode);
  }
}
