import { Component, HostBinding, HostListener, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ContactFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  @HostBinding('class') hostClass = '';

  private readonly screenClasses = [
    'screen-mobile',
    'screen-tablet',
    'screen-desktop',
    'screen-desktop-xl',
  ];

  constructor(
    private readonly renderer: Renderer2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {
    this.updateScreenClass();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateScreenClass();
  }

  private updateScreenClass(): void {
    const width = window.innerWidth;
    const className = this.getClassForWidth(width);

    this.screenClasses.forEach((cls) => {
      this.renderer.removeClass(this.document.body, cls);
    });

    this.renderer.addClass(this.document.body, className);
    this.hostClass = className;
  }

  private getClassForWidth(width: number): string {
    if (width >= 1920) {
      return 'screen-desktop-xl';
    }
    if (width >= 1025) {
      return 'screen-desktop';
    }
    if (width >= 768) {
      return 'screen-tablet';
    }
    return 'screen-mobile';
  }
}
