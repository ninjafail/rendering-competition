import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FinalSubmissionComponent } from './final-submission/final-submission.component';

export const routes: Routes = [
  { path: '', component: IntroductionComponent, title: 'Introduction' },
  {
    path: 'introduction',
    component: IntroductionComponent,
    title: 'Introduction',
  },
  { path: 'features', component: FeaturesComponent, title: 'Our Features' },
  {
    path: 'final',
    component: FinalSubmissionComponent,
    title: 'Final Submission',
  },
];
