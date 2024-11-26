import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOOTER_MENU } from '../../core/data/footer-menu';
import { FooterLinkItemComponent } from './footer-link-item/footer-link-item.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class FooterComponent {
  public footerMenu = FOOTER_MENU;
}
