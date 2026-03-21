import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards = [
    { img: 'images/partners/iiitd_logo.png' },
    { img: 'images/partners/iiitb_logo.png' },
    { img: 'images/partners/bharathiar_logo.png' }
  ];

  active = 0;
  timer: any;
  isMobile = false;
  isTablet = false;
  positions: any = {
    center: { x: 0, z: 0, scale: 1.15, opacity: 1, blur: 0, border: 'rgba(250,204,21,0.6)' },
    left: { x: -220, z: -80, scale: 0.8, opacity: 0.55, blur: 1.5, border: 'rgba(255,255,255,0.1)' },
    right: { x: 220, z: -80, scale: 0.8, opacity: 0.55, blur: 1.5, border: 'rgba(255,255,255,0.1)' },
    hidden: { x: 0, z: -200, scale: 0.5, opacity: 0, blur: 4, border: 'rgba(255,255,255,0.05)' }
  };
  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Change Page Title
    this.titleService.setTitle(
      'Care2Data | Home'
    );

    // Change Meta Description
    this.metaService.updateTag({
      name: 'description',
      content: 'Care2Data delivers intelligent clinical data validation software through KWALIFY™, enabling regulatory-compliant, audit-ready and submission-ready clinical trial datasets.'
    });

    // Change Meta url
    this.metaService.updateTag({
      name: 'url',
      content: 'https://gokulgovindharaj.github.io/Care2Data-Website/#/home'
    });

    // Change Keywords
    this.metaService.updateTag({
      name: 'keywords',
      content: 'Clinical data validation, Regulatory confidence, Data integrity, Submission readiness, Audit trails, Life sciences software, Semantic Intelligence'
    });

    // Open Graph Title
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Care2Data | Home'
    });

    // Open Graph Description
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Care2Data delivers intelligent clinical data validation software through KWALIFY™, enabling regulatory-compliant, audit-ready and submission-ready clinical trial datasets.'
    });
    this.checkDevice();
    window.addEventListener('resize', this.checkDevice.bind(this));
    this.startAutoSlide();
  }

  checkDevice() {
    const w = window.innerWidth;

    this.isMobile = w < 640;       // Tailwind sm
    this.isTablet = w >= 640 && w < 1024; // md
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }

  getPos(i: number) {
    const total = this.cards.length;
    const diff = ((i - this.active) % total + total) % total;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === total - 1) return 'left';
    return 'hidden';
  }

  getStyles(i: number) {
    const pos = this.positions[this.getPos(i)];
    const type = this.getPos(i);

    let scale = pos.scale;

    // 🔥 Device-based override
    if (this.isMobile) {
      scale = type === 'center' ? 1.55 : 0.8;
    } else if (this.isTablet) {
      scale = type === 'center' ? 1.55 : 0.85;
    } else {
      scale = type === 'center' ? 1.55 : 0.9;
    }

    return {
      transform: `translateX(${pos.x}px) translateZ(${pos.z}px) scale(${scale})`,
      opacity: pos.opacity,
      filter: `blur(${pos.blur}px)`,
      borderColor: pos.border,
      zIndex: type === 'center' ? 5 : type === 'hidden' ? 0 : 2
    };
  }

  go(dir: number) {
    const total = this.cards.length;
    this.active = ((this.active + dir) % total + total) % total;
    this.resetTimer();
  }

  goTo(i: number) {
    this.active = i;
    this.resetTimer();
  }

  onCardClick(i: number) {
    if (i !== this.active) {
      this.active = i;
      this.resetTimer();
    }
  }

  startAutoSlide() {
    this.timer = setInterval(() => this.go(1), 5000);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.startAutoSlide();
  }
}
