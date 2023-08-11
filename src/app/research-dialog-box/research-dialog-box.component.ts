import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ResearchBookServiceService } from '../services/research-book-service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-research-dialog-box',
  templateUrl: './research-dialog-box.component.html',
  styleUrls: ['./research-dialog-box.component.css']
})
export class ResearchDialogBoxComponent {
  inputText = '';

  constructor(
    public dialogRef: MatDialogRef<ResearchDialogBoxComponent>,
    private researchBookService: ResearchBookServiceService,
    private router: Router
  ) {}
  continueButtonClicked() {
    // Call multiple functions here
    // this.navigateToNewResearch();
    
    this.router.navigate(['newresearch']);
    this.saveData();
  }
  navigateToNewResearch() {
    // Navigate to the NewResearchComponent
    
  }

     saveData(): void {
      
      const researchBook: any = {
        name: this.inputText,
        lastModified: new Date(),
        dateCreated: new Date()
      };
      this.dialogRef.close();
      this.researchBookService.createResearchBook(researchBook).subscribe(
      (response: any) => {
        this.dialogRef.close();
      },
      // (error: any) => {
      //   console.error('Error creating research book:', error);
      //   // Handle error here if needed
      // }
    );
     }
    
  closeModal(): void {
    // Close the dialog without passing any data
    this.dialogRef.close();
  }
}
