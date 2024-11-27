import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TMode } from '../../../core/types/theme-mode.type';
import { ILink } from '../../../core/interfaces/links-interface';

@Component({
  selector: 'app-footer-link-item',
  standalone: true,
  imports: [],
  templateUrl: './footer-link-item.component.html',
  styleUrl: './footer-link-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterLinkItemComponent {
  public links = input<ILink[]>();
  public themeMode = input<TMode | undefined>();

  public getIcon(link: { image: string }): string {
    return `${link.image}-${this.themeMode()}.png`;
  }
}
