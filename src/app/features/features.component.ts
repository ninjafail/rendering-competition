import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SectionComponent } from '../components/section/section.component';
import { FigureComponent } from '../components/figure/figure.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-features',
  imports: [SectionComponent, FigureComponent, MatCardModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent { }
