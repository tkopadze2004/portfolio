import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer-link-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
})
export class FooterLinkItemComponent {
  public links = input<{ image: string; url: string }[]>();
}
