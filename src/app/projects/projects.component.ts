import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
readonly dialog = inject(MatDialog);
constructor() {}

openDialog() {
  const dialogRef = this.dialog.open(ProjectDialogComponent, {
    width: '90vw',
    height: '80vh',
    autoFocus: false,
  });
}
goToLink(url: string) {
  window.open(url, "_blank")
}
}
