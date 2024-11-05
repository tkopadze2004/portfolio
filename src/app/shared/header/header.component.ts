import { NgClass, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TMode } from '../../core/types/theme-mode.type';
import { selectThemeMode } from '../../store/selectors/theme-mode.selectors';
import { setThemeMode } from '../../store/actions/theme-mode.actions';
import { PushPipe } from '@ngrx/component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, PushPipe,RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly store = inject(Store);
  public currentMode$: Observable<TMode> = this.store.select(selectThemeMode);

  public toggleMode(currentMode: TMode): void {
    const newMode: TMode = currentMode === 'light' ? 'dark' : 'light';
    this.store.dispatch(setThemeMode({ mode: newMode }));
    this.updateRootClass(currentMode, newMode);
  }

  ngOnInit(): void {
    this.updateRootClass('dark', 'light');
  }

  private updateRootClass(oldMode: TMode, newMode: TMode) {
    document.body.classList.remove(oldMode);
    document.body.classList.add(newMode);
  }
}
