import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService, TMode } from '../theme.service';
import { PushPipe } from '@ngrx/component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, PushPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
