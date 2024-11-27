import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TMode } from '../core/types/theme-mode.type';
import { ISkill } from '../core/interfaces/skill-interface';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillItemComponent {
  public skill = input<ISkill>();
  public themeMode = input<TMode | undefined>();

  public getIcon(icon: string): string {
    return `skills/${icon}-${this.themeMode()}.png`;
  }
}
