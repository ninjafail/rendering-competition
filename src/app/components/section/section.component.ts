import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-section',
  imports: [MatCardModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionComponent {
  @Input() title = '';
}
