import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { AnaminesisService } from 'src/app/services/anaminesis.service';
  
  @Component({
    selector: 'app-anaminesis-form',
    imports: [CommonModule],
    templateUrl: './anaminesis-form.component.html',
    styleUrl: './anaminesis-form.component.css'
  })
  export class AnaminesisFormComponent implements OnInit {
    forms: any[] = [];
  
    constructor(private anaminesisService: AnaminesisService, private router: Router) {}
  
    ngOnInit(): void {
      this.getAllAnaminesis();
    }
  
    getAllAnaminesis(): void {
      this.anaminesisService.getAllAnaminesis().subscribe((response: any) => {
        this.forms = response;
      });
    }
  
    navigateToForm(id: number): void {
      this.router.navigate([`/anamnesis/${id}`]);
    }
  }