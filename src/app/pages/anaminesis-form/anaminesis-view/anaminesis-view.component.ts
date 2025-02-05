import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anaminesis-view',
  imports: [],
  templateUrl: './anaminesis-view.component.html',
  styleUrl: './anaminesis-view.component.css'
})
export class AnaminesisViewComponent implements OnInit {

  anamnese: any;

  constructor() {}

  ngOnInit(): void {
    // Simulando recebimento do JSON (substitua isso pela API real)
    this.anamnese = {
      id: 2,
      personalInfo: {
        id: 1,
        firstName: "Maria",
        lastName: "Silva",
        address: "Rua das Flores, 123",
        phoneNumber: "11987654321",
        age: 25,
        gender: "FEMALE"
      },
      healthInfo: {
        id: 1,
        exposedToSun: false,
        highGlycemicDiet: false,
        regularIntestinalFunction: false,
        goodSleepQuality: false,
        smoking: false,
        pacemaker: false,
        skinDisease: false
      },
      medicalHistory: {
        id: 1,
        previousFacialTreatment: false,
        facialTreatmentDescription: null,
        skinAllergy: false,
        allergyDescription: null,
        usedRoaccutane: false
      },
      lifestyleInfo: {
        id: 1,
        drinksWaterFrequently: true,
        drinksAlcohol: false,
        usesSunscreenFrequently: false,
        usesBirthControl: false,
        hasSkincareRoutine: false,
        pregnantOrLactating: false,
        menstruating: false
      }
    };
  }

}