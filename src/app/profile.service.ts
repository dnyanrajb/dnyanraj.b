import { Injectable } from '@angular/core';
import { educationDataType, skillsDataType } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  skillsData: skillsDataType[] = [
    {id: 1, name: 'Angular', value: 100},
    {id: 2, name: 'Javascript', value: 100},
    {id: 3, name: 'HTML5', value: 100},
    {id: 4, name: 'CSS3', value: 100},
    {id: 5, name: 'Jest/Jasmine', value: 100},
    {id: 6, name: 'Docker', value: 50},
    {id: 7, name: 'Kubernetes', value: 50},
    {id: 8, name: 'Nodejs/Express', value: 10}
  ];
  educationData: educationDataType[] = [
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
  skills() {
    return this.skillsData; 
  }
  education() {
    return this.educationData;
  }
}
