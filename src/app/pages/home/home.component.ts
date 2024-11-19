import { Component } from '@angular/core';
import { FOOTER_MENU } from '../../core/data/footer-menu';
import { FooterLinkItemComponent } from "../../shared/footer/footer-link-item/footer-link-item.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterLinkItemComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text: string = 'Angular Developer'; // Text to display
  displayedText: string = '';          // Text that will be shown one character at a time
  typingSpeed: number = 100;           // Adjust speed (in ms) for typing
  public footerMenu = FOOTER_MENU;

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
        clearInterval(interval); // Stop typing once text is complete
      }
    }, this.typingSpeed);
  }


}
