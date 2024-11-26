import { Component } from '@angular/core';
import { ProjectItemComponent } from "../../shared/project-item/project-item.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
