import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
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
  imports: [NgClass, PushPipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private readonly store: Store = inject(Store);
  public currentMode$: Observable<TMode> = this.store.select(selectThemeMode);
  public animateClass: string = 'animate';

  public toggleMode(currentMode: TMode): void {
    const newMode: TMode = currentMode === 'dark' ? 'light' : 'dark';
    this.store.dispatch(setThemeMode({ mode: newMode }));
    this.updateRootClass(currentMode, newMode);
  }

  public ngOnInit(): void {
    this.updateRootClass('light', 'dark');
  }

  private updateRootClass(oldMode: TMode, newMode: TMode): void {
    document.body.classList.remove(oldMode);
    document.body.classList.add(newMode);
  }
}
