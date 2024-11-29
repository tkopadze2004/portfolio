import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkillItemComponent } from '../../shared/skill-item/skill-item.component';
import { Observable } from 'rxjs';
import { TMode } from '../../core/types/theme-mode.type';
import { Store } from '@ngrx/store';
import { selectThemeMode } from '../../store/selectors/theme-mode.selectors';
import { PushPipe } from '@ngrx/component';
import { SKILLS } from '../../core/data/skills-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillItemComponent, PushPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  private readonly store: Store = inject(Store);
  public readonly skills = SKILLS;
  public currentMode$: Observable<TMode> = this.store.select(selectThemeMode);
}
