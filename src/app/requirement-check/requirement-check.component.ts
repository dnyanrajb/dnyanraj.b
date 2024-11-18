import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SkillsDataType } from '../profile.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-requirement-check',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './requirement-check.component.html',
  styleUrls: ['./requirement-check.component.scss']
})
export class RequirementCheckComponent {
  constructor(private profileService: ProfileService) {}
  @Input() requirements: string = '';
  @Output() percentageCalculated = new EventEmitter<number>();
  requirementArray = this.requirements.toLowerCase().split(',').map(req => req.trim());
  
  skills: SkillsDataType[] = this.profileService.skillDetails();

  get matchedSkills() {
    const requirementArray = this.requirements.toLowerCase().split(',').map(req => req.trim());
    return this.skills.filter(skill => requirementArray.includes(skill.name.toLowerCase()));
  }

  get unmatchedSkills() {
    const matchedSkillNames = this.matchedSkills.map(skill => skill.name.toLowerCase());
    const userEnteredSkills = this.requirements.toLowerCase().split(',').map(req => req.trim());

    // Filter skills that are not matched and are in the user-entered skills
    return userEnteredSkills.filter(req => !matchedSkillNames.includes(req)).map(req => {
        return this.skills.find(skill => skill.name.toLowerCase() === req) || { name: req }; // Return the skill or the user-entered name
    }).filter(skill => skill.name); // Ensure we only return valid skill names
  }

  calculatePercentage() {
    const totalSkills = this.requirements ? this.requirements.split(',').length : 0;
    const matchedCount = this.matchedSkills.length;
    const percentage = totalSkills > 0 ? (matchedCount / totalSkills) * 100 : 0;
    this.percentageCalculated.emit(percentage);
  }
}
