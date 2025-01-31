import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SectionComponent } from '../components/section/section.component';
import { FigureComponent } from '../components/figure/figure.component';

@Component({
  selector: 'app-submission',
  imports: [SectionComponent, FigureComponent],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent {

}
