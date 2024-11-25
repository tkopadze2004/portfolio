import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SkillItemComponent } from '../../skill-item/skill-item.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, SkillItemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  skills = [
    {
      name: 'Angular',
      icon: 'skills/angular.png',
    },
    {
      name: 'JavaScript',
      icon: 'skills/js.png',
    },
    {
      name: 'TypeScript',
      icon: 'skills/ts.png',
    },
    {
      name: 'ngrx',
      icon: 'skills/ngrx.png',
    },
    {
      name: 'rxjs',
      icon: 'skills/rxjs.png',
    },
    {
      name: 'html',
      icon: 'skills/html.png',
    },
    {
      name: 'sass',
      icon: 'skills/sass.png',
    },
    {
      name: 'Tailwind CSS',
      icon: 'skills/tailwind.png',
    },
    {
      name: 'css',
      icon: 'skills/css.png',
    },
    {
      name: 'Bootstrap',
      icon: 'skills/bootstrap.png',
    },
    {
      name: 'Git',
      icon: 'skills/git.png',
    },
    {
      name: 'npm',
      icon: 'skills/npm.png',
    },
    {
      name: 'postman',
      icon: 'skills/postman.png',
    },
    {
      name: 'firebase',
      icon: 'skills/firebase.png',
    },
  ];
}
