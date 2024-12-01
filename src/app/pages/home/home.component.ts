import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FOOTER_MENU } from '../../core/data/footer-menu';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectThemeMode } from '../../store/selectors/theme-mode.selectors';
import { PushPipe } from '@ngrx/component';
import { TMode } from '../../core/types/theme-mode.type';
import { RouterLink } from '@angular/router';
import { FooterLinkItemComponent } from '../../shared/footer-link-item/footer-link-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PushPipe, RouterLink, FooterLinkItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private readonly store: Store = inject(Store);
  private text: string = 'Angular Developer';
  public displayedText: string = '';
  private typingSpeed: number = 100;
  public readonly footerMenu = FOOTER_MENU;
  private readonly cdr = inject(ChangeDetectorRef);
  public currentMode$: Observable<TMode> = this.store.select(selectThemeMode);

  public ngOnInit(): void {
    this.startTyping();
  }

  public startTyping(): void {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.text.length) {
        this.displayedText += this.text[index];
        index++;
        this.cdr.detectChanges();
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
