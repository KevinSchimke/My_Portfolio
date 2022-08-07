import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  projects = [
    {
      name: 'Join',
      description: 'A simple Task Manager',
      img: './../../../assets/img/project_dummy.jpg',
      url: 'https://join.kevin-schimke.de/board.html',
      projecttype: 'JavaScript'
    },
    {
      name: 'El-Pollo-Loco',
      description: '',
      img: './../../../assets/img/project_dummy.jpg',
      url: 'https://join.kevin-schimke.de/board.html',
      projecttype: 'JavaScript'
    },
    {
      name: 'QuizApp',
      description: '',
      img: './../../../assets/img/project_dummy.jpg',
      url: 'https://join.kevin-schimke.de/board.html',
      projecttype: 'JavaScript'
    },
    {
      name: 'Pokedex',
      description: '',
      img: './../../../assets/img/project_dummy.jpg',
      url: 'https://join.kevin-schimke.de/board.html',
      projecttype: 'JavaScript'
    },
    {
      name: 'Portfolio',
      description: '',
      img: './../../../assets/img/project_dummy.jpg',
      url: 'https://join.kevin-schimke.de/board.html',
      projecttype: 'Angular'
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  filtered_projects = this.projects;
  active_btn = 'all'

  filterProjects(filterName: string) {
    if (filterName == 'all') {
      this.filtered_projects = this.projects;
      this.active_btn = 'all';
    } else if (filterName == 'angular') {
      this.filtered_projects = this.projects.filter(project => project.projecttype == 'Angular');
      this.active_btn = 'angular'
    } else if (filterName == 'javaScript') {
      this.filtered_projects = this.projects.filter(project => project.projecttype == 'JavaScript');
      this.active_btn = 'javaScript';
    }
  }
}

// window.open('https://join.kevin-schimke.de/board.html','_blank')