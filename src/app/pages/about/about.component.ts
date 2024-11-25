import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SkillItemComponent } from "../../skill-item/skill-item.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, SkillItemComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    {
      name: 'Angular',
      icon: 'socials/fb-light.png',
    },
    {
      name: 'TypeScript',
      icon: 'socials/github-light.png',
    },
    {
      name: 'Tailwind CSS',
      icon: 'socials/fb-light.png',
    },
    {
      name: 'RxJS',
      icon: 'socials/github-light.png',
    },
    {
      name: 'SCSS',
      icon: 'socials/github-light.png',
    },
    {
      name: 'Bootstrap',
      icon: 'socials/github-light.png',
    },
    {
      name: 'JavaScript',
      icon: 'socials/github-light.png',
    },
    {
      name: 'Git',
      icon: 'socials/github-light.png',
    },
  ];
}
