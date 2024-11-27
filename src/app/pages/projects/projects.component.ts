import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectItemComponent } from '../../shared/project-item/project-item.component';
import { PROJECTS } from '../../core/data/project-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  public readonly projects = PROJECTS;
}
