import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatDialogActions, MatButtonModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ProjectDialogComponent>);
  onNoClick(): void {
    this.dialogRef.close();
  }
}
