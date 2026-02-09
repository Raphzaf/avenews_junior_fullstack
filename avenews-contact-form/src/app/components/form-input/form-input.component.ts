import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
})
export class FormInputComponent {
  @Input({ required: true }) control!: FormControl;
  @Input({ required: true }) label!: string;
  @Input({ required: true }) fieldNumber!: number;
  @Input() placeholder = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() required = true;
  @Input() submitted = false;
  @Input() hint = '';
  @Input() showToggle = false;

  passwordVisible = false;

  get showError(): boolean {
    return this.submitted && this.control.invalid;
  }

  get inputType(): string {
    if (this.showToggle) {
      return this.passwordVisible ? 'text' : 'password';
    }
    return this.type;
  }

  toggleVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  get errorMessage(): string {
    if (!this.control.errors) return '';
    if (this.control.errors['required']) return 'This field is required.';
    if (this.control.errors['email']) return 'Please enter a valid email address.';
    return 'Invalid value.';
  }
}
