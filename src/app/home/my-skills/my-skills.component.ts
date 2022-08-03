import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skills = [
    {name: 'Angular', img: './../../../assets/img/angular.png'},
    {name: 'TypeScript',img: './../../../assets/img/typescript.png'},
    {name: 'GIT',img: './../../../assets/img/git.png'},
    {name: 'HTML',img: './../../../assets/img/html.png'},
    {name: 'CSS',img: './../../../assets/img/css.png'},
    {name: 'JavaScript',img: './../../../assets/img/js.png'},
    {name: 'Rest APIs',img: './../../../assets/img/api.png'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
