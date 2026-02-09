import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';

@Component({
  selector: 'app-submit-section',
  standalone: true,
  templateUrl: './submit-section.component.html',
  styleUrl: './submit-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SubmitSectionComponent {
  @Input() showGlobalError = false;
}
