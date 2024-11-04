import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PushPipe } from '@ngrx/component';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { TMode } from '../../core/types/theme-mode.type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, PushPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private appThemeService: ThemeService = inject(ThemeService);
  public currentMode$: Observable<TMode> = this.appThemeService.getMode();
  
  public toggleMode(): void {
    const newMode: TMode =
      this.appThemeService.getModeValue() === 'light' ? 'dark' : 'light';
    this.appThemeService.setMode(newMode);
  }
}
