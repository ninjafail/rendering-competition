import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-figure',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './figure.component.html',
  styleUrl: './figure.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FigureComponent {
  @Input() src = '';
  @Input() caption = '';
  @Input() firstSrc = '';
  @Input() firstCaption = '';
  @Input() secondSrc = '';
  @Input() secondCaption = '';

  usesComparison(): boolean {
    return this.firstSrc != "" && this.secondSrc != "";
  }
}
