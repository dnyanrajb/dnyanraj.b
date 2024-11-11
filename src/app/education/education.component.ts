import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProfileService } from '../profile.service';
import { educationDataType } from '../profile.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  constructor(private profileService: ProfileService) {}
  educations: educationDataType[] = this.profileService.education();
}
