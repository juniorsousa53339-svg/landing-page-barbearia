import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      setTimeout(() => {
        this.startAnimations();
      }, 100);

    }
  }

  startAnimations() {
    this.startCounter();
    this.startTypewriter();
    this.startScrollAnimation();
  }

  // =========================
  // CONTADOR
  // =========================
  startCounter() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
      const target = Number(counter.getAttribute('data-target'));
      let count = 0;

      const updateCount = () => {
        const increment = target / 100;

        if (count < target) {
          count += increment;
          counter.innerHTML = Math.ceil(count).toString();
          setTimeout(updateCount, 20);
        } else {
          counter.innerHTML = target + '+';
        }
      };

      updateCount();
    });
  }

  // =========================
  // TYPEWRITER
  // =========================
  startTypewriter() {
    const textElement = document.querySelector('.typing') as HTMLElement;

    if (textElement) {
      const fullText = textElement.textContent || '';
      textElement.textContent = '';

      textElement.classList.add('active');

      let index = 0;

      const type = () => {
        if (index < fullText.length) {
          const char = fullText.charAt(index);

          textElement.textContent += char;
          index++;

          let delay = 25;

          if (char === '.') delay = 400;
          else if (char === ',') delay = 200;
          else if (char === '\n') delay = 300;

          setTimeout(type, delay);
        }
      };

      type();
    }
  }

  // =========================
  // SCROLL ANIMATION
  // =========================
  startScrollAnimation() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.2
    });

    reveals.forEach(el => observer.observe(el));
  }
}
