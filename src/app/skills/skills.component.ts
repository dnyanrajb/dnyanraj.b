import { Component, signal, WritableSignal, computed } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProfileService } from '../profile.service';
import { SkillsDataType } from '../profile.model';
import { FormsModule } from '@angular/forms';
import { RequirementCheckComponent } from '../requirement-check/requirement-check.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule, FormsModule, CommonModule, RequirementCheckComponent, MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillSet: WritableSignal<SkillsDataType[]> = signal<SkillsDataType[]>([]);
  requirements: string = '';
  showRequirementCheck: boolean = false;
  percentageMatch: number | null = null;
  showTextarea: boolean = true;

  // Computed signal to get the total skill value as a percentage
  totalSkillValuePercentage = computed(() => {
    const totalValue = this.skillSet().reduce((total, skill) => total + skill.value, 0);
    const maxValue = this.skillSet().length * 100; // Assuming each skill has a max value of 100
    return maxValue > 0 ? (totalValue / maxValue) * 100 : 0; // Calculate percentage
  });

  constructor(private profileService: ProfileService) {
    this.skillSet.set(this.profileService.skills());
  }

  checkRequirements() {
    this.showRequirementCheck = true;
    this.showTextarea = false;
    this.percentageMatch = null;
  }

  handlePercentageCalculated(percentage: number) {
    this.percentageMatch = percentage;
    this.showRequirementCheck = false;
    this.showTextarea = false;
  }
}
