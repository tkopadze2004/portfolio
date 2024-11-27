import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IProject } from '../../core/interfaces/project-interface';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent {
  public project = input<IProject>();
}
