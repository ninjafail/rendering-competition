import { Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { SubmissionComponent } from './submission/submission.component';
import { ReferencesComponent } from './references/references.component';

export const routes: Routes = [
  { path: '', component: SubmissionComponent, title: 'Our Submission' },
  {
    path: 'submission',
    component: SubmissionComponent,
    title: 'Our Submission',
  },
  {
    path: 'features',
    component: FeaturesComponent,
    title: 'Implemented Features',
  },
  {
    path: 'references',
    component: ReferencesComponent,
    title: 'References',
  },
];
