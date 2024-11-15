import { Injectable } from '@angular/core';
import { AngularConceptsDataType, EducationDataType, SkillsDataType } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  skillsData: SkillsDataType[] = [
    {id: 1, name: 'Angular', value: 100},
    {id: 2, name: 'Javascript', value: 100},
    {id: 3, name: 'HTML5', value: 100},
    {id: 4, name: 'CSS3', value: 100},
    {id: 5, name: 'Jest/Jasmine', value: 100},
    {id: 6, name: 'Docker', value: 50},
    {id: 7, name: 'Kubernetes', value: 50},
    {id: 8, name: 'Nodejs/Express', value: 10}
  ];
  educationData: EducationDataType[] = [
    {
      year: '2014 - 2018',
      degree: "Bachelor's Degree",
      field: 'Bachelor of Engineering (Computer Science)',
      institution: 'Rao Bahadur Y Mahaballeswarappa Engineering College',
    },
    {
      year: '2013 - 2014',
      degree: 'Pre University',
      field: 'Pre University',
      institution: 'Sri Chaithanya PU college',
    },
    {
      year: '2012',
      degree: 'School',
      field: 'School',
      institution: "St Joseph's boys high school",
    }
  ];
  angularConceptsData: AngularConceptsDataType[] = [
    { title: 'Dependency Injection(Click)', description: 'It is used to inject dependencies from external resources rather than creating again in the component', codeSnippet: 
    "In Service:-\n@Injectable({providedIn: 'root'})\nIn Component:-\nconstructor(private profileService: ProfileService)\nskillSet: SkillsDataType[] = this.profileService.skills();", isFlipped: false },
    { title: 'Lazy Loading(Click to Turn)', description: 'Lazy loading allows us to load certain modules lazily on user interaction.loadChildren is added in app-routing.ts file to achieve lazy loading', codeSnippet: 
      `const routes: Routes = [{ path: 'lazy-module', loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule) }]`, isFlipped: false },
    { title: 'Custom Pipe(Click to Turn)', description: 'we can create a custom pipe using @pipe which will have a pipeTransForm interface that uses transform method. example custom pipe to replace text more than 160 char into elipsis example you can see here', 
      codeSnippet: `@Pipe({
                            name: 'truncate',
                            standalone: true
                          })
export class TruncatePipe implements PipeTransform {
transform(value: string, limit: number = 150): string {
if (!value) return '';
return value.length > limit ? value.substring(0, limit) + '...' : value;
    } }
in html component:-
{{ concept.description | truncate: 160 }} `, 
    isFlipped: false
    },
    { title: '@Input(Click to Turn)', description: 'If we want to send data from parent to child in that case we can use @Input()', codeSnippet: 'Code', isFlipped: false },
    { title: '@Output(Click to Turn)', description: 'If we want to send data from child to parent in that case we can use @Output() with event emitter', codeSnippet: 'Code', isFlipped: false },
    { title: 'Reactive Forms(Click to Turn)', description: 'In reactive form we use formControl to have control over one input field which are grouped under formGroup or formArray.', 
    codeSnippet: 
  `In Html file:-
<form class="contact-form" [formGroup]="contactForm">
<mat-form-field appearance="outline">
<mat-label>Name</mat-label>
<input matInput required formControlName="name">
</mat-form-field>
</form>
    In Ts file:-
constructor(private fb: FormBuilder) {}
contactForm: FormGroup = new FormGroup({});
ngOnInit() {
this.contactForm = this.fb.group({
name: [''],
subject: [''],
phone: ['', Validators.pattern(/^\d{10}$/)],
email: ['', Validators.email]
})
}`, isFlipped: false },
    { title: 'Lifecycle Hook(Click to Turn)', description: 'Lifecycle hooks let us run code at specific lifecycle events\n ngOninit is one of the examples which is called on initialization', codeSnippet: 
`ngOnInit() {
this.contactForm = this.fb.group({
name: [''],
subject: [''],
phone: ['', Validators.pattern(/^\d{10}$/)],
email: ['', Validators.email]
})
}`, isFlipped: false }
  ];

  angular17FeaturesData: AngularConceptsDataType[] = [
    { title: 'Standalone Component', description: 'Standalone components do not require to be added in the any module. we need to set standalone flag as true in the component to make it standalone', 
  codeSnippet: `@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})`, isFlipped: false },
    { title: 'Signals', description: 'Signal is a system that tracks how and where our state is used across the application', codeSnippet: 'Code', isFlipped: false },
    { title: 'Writable Signals', description: 'Writable signals can be acheieved by wrapping Signal around a value. we can specify type as writable to differentiate it from computed signals', codeSnippet: 'Code', isFlipped: false },
    { title: 'Computed Signals', description: 'Computed signals gets there value from writable signals using keyword computed and they are read only. we can specify type as computed', codeSnippet: 'Code', isFlipped: false },
    { title: 'Deferable Loading', description: 'Deferable loading allows us to defer some part of html or ts code to be loaded lazily depending on user action or after certain time limit. Contact component uses defer to load it after 5s in main screen', 
    codeSnippet: 
`@defer(on timer(5s)) {
<app-contact></app-contact>
}`, isFlipped: false },
    { title: 'New Directives', description: 'New directives such as @for,@If,@Switch were introduced which can be used instead of traditional *ngIf,*ngFor,*ngSwitch', codeSnippet: 
    `@for(skills of skillSet; track skills.name) {
    <div class="progress-item">
    <h3>{{skills.name}}</h3>
    <mat-progress-bar mode="determinate" value="{{skills.value}}"></mat-progress-bar>
    </div>
        }`, isFlipped: false },
  ];
  skills() {
    return this.skillsData; 
  }
  education() {
    return this.educationData;
  }
  angularConcepts() {
    return this.angularConceptsData;
  }
  angular17Features() {
    return this.angular17FeaturesData;
  }
  goToLink(url: string) {
    window.open(url, "_blank")
  }
}
