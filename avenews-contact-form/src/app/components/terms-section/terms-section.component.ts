import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-terms-section',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './terms-section.component.html',
  styleUrl: './terms-section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TermsSectionComponent {
  @Input({ required: true }) control!: FormControl;
  @Input() submitted = false;
}
