import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent {

}
