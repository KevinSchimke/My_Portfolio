import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-infos',
  templateUrl: './about-me-infos.component.html',
  styleUrls: ['./about-me-infos.component.scss']
})
export class AboutMeInfosComponent implements OnInit {
  steps = [
    {
      title: 'MEINE REISE BEGANN',
      img: './../../../assets/img/walk.png',
      description: 'als Industriemechaniker in einem mittelständigen Unternehmen.'
    },
    {
      title: 'AUF MEINER REISE',
      img: './../../../assets/img/heart.png',
      description: 'entdeckte ich die Leidenschaft zu programmieren und setzte dies bereits in kleineren eigenen Projekten um.'
    },
    {
      title: 'ICH ERKANNTE',
      img: './../../../assets/img/search.png',
      description: 'es soll nicht nur ein Hobby bleiben und bewarb mich bei der Developerakademie um mir professionelles Wissen anzueignen.'
    },
    {
      title: 'BEREIT FÜR',
      img: './../../../assets/img/plane.png',
      description: 'den ersten Job als Frontend-Developer, um mein Hobby zum Beruf zu machen.'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
