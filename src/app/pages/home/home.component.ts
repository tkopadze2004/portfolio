import { Component, inject, OnInit } from '@angular/core';
import { FOOTER_MENU } from '../../core/data/footer-menu';
import { FooterLinkItemComponent } from '../../shared/footer/footer-link-item/footer-link-item.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectThemeMode } from '../../store/selectors/theme-mode.selectors';
import { PushPipe } from '@ngrx/component';
import { TMode } from '../../core/types/theme-mode.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterLinkItemComponent, PushPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{
  private readonly store: Store = inject(Store);
  private text: string = 'Angular Developer ';
  public displayedText: string = '';
  private typingSpeed: number = 100;
  public footerMenu = FOOTER_MENU;
  public currentMode$: Observable<TMode> = this.store.select(selectThemeMode);

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    let index = 0;
    const interval = setInterval(() => {
      if (index < this.text.length) {
        this.displayedText += this.text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, this.typingSpeed);
  }
}
