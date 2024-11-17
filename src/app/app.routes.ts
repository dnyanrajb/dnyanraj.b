import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
];
