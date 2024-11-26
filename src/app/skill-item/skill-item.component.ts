import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TMode } from '../core/types/theme-mode.type';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [],
  templateUrl: './skill-item.component.html',
  styleUrl: './skill-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillItemComponent {
  @Input() skill!: { name: string; icon: string };
  @Input() themeMode!: TMode | undefined;

  public getIcon(icon: string): string {
    return `skills/${icon}-${this.themeMode}.png`;
  }
}
