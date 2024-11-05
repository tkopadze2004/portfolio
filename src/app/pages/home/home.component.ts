import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  text: string = 'Angular Developer'; // Text to display
  displayedText: string = '';          // Text that will be shown one character at a time
  typingSpeed: number = 100;           // Adjust speed (in ms) for typing

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
