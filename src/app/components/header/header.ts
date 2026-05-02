import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.toggleBodyScroll();
  }

  closeMenu() {
    this.menuOpen = false;
    this.toggleBodyScroll();
  }

  toggleBodyScroll() {
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

}

