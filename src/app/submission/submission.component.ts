import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SectionComponent } from '../components/section/section.component';

@Component({
  selector: 'app-submission',
  imports: [SectionComponent],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent {

}
