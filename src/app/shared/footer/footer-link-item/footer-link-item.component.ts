import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-link-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
})
export class FooterLinkItemComponent {
  @Input() title: string = '';
  @Input() links: { title: string; url: string }[] = [];
}
