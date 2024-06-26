import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  // Input decorator (denoted by @ symbol)
  // exclamation point (not-null assertion operator) denotes that the property will be passed into the component
  //@Input() housingLocation!:HouseLocation;
  @Input() housingLocation!: HousingLocation;
}
