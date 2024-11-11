import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProfileService } from '../profile.service';
import { skillsDataType } from '../profile.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private profileService: ProfileService) {}
  skillSet: skillsDataType[] = this.profileService.skills();
}
