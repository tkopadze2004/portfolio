import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { TMode } from '../../core/types/theme-mode.type';
import { ISkill } from '../../core/interfaces/skill-interface';

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

  public isHovered = signal(false);
  public isVisible = signal(false);
  public cursorX = signal(0);
  public cursorY = signal(0);

  private hoverTimeout: ReturnType<typeof setTimeout> | null = null;
  private leaveTimeout: ReturnType<typeof setTimeout> | null = null;

  public getIcon(icon: string): string {
    return `skills/${icon}-${this.themeMode()}.png`;
  }

  public onMouseMove(event: MouseEvent): void {
    this.cursorX.set(event.clientX);
    this.cursorY.set(event.clientY);
  }

  public onMouseEnter(): void {
    if (this.leaveTimeout) {
      clearTimeout(this.leaveTimeout);
      this.leaveTimeout = null;
    }
    this.isHovered.set(true);
    this.hoverTimeout = setTimeout(() => this.isVisible.set(true), 300);
  }

  public onMouseLeave(): void {
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
    this.isVisible.set(false);
    this.leaveTimeout = setTimeout(() => this.isHovered.set(false), 300);
  }
}
