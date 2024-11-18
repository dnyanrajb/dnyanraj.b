import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { ProfileService } from '../profile.service';
import { AngularConceptsDataType } from '../profile.model';
import { MatButtonModule } from '@angular/material/button';
import { TruncatePipe } from '../../truncate.pipe';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatDialogContent, CommonModule, MatButtonModule, TruncatePipe],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ProjectDialogComponent>);
  constructor(private profileService: ProfileService) {}

  angularConcepts: AngularConceptsDataType[] = this.profileService.angularConcepts();

  angular17Features: AngularConceptsDataType[] = this.profileService.angular17Features();

  toggleFlip(concept: AngularConceptsDataType): void {
    concept.isFlipped = !concept.isFlipped;
  }
  goToLink(url: string) {
    window.open(url, "_blank")
  }
  close() {
    this.dialogRef.close();
  } 
}
