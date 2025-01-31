import { Component } from '@angular/core';
import { SectionComponent } from "../components/section/section.component";
import { FigureComponent } from "../components/figure/figure.component";

@Component({
  selector: 'app-references',
  imports: [SectionComponent, FigureComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

}
