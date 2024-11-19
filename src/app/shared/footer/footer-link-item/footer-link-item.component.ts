import { Component, Input, input } from '@angular/core';
import { TMode } from '../../../core/types/theme-mode.type';

@Component({
  selector: 'app-footer-link-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
})
export class FooterLinkItemComponent {
  public links = input<{ image: string; url: string }[]>();
  @Input() themeMode!: TMode| undefined;

  public getIcon(link: { image: string }): string {
    return `${link.image}-${this.themeMode}.png`;
  }
}
