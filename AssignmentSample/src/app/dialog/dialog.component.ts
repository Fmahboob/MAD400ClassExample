import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { inject } from '@angular/core/testing';
import { from } from 'rxjs';
import { MatDialogRef} from '@angular/material/dialog'
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  newContent!: Content;
  temptags: string = "";
  tempid: string = "";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();
 

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA)() 
  private digimonService: DigimonService) {
   
   }
   modifyOrAddItemToParent(): void {
    // if (!this.tempid || !this.newContent.title || !this.newContent.description || !this.newContent.creator) {
    //   fail("Please enter the required fields to continue");
    // }
    if (this.tempid !== "") {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      this.newContent.id = parseInt(this.tempid);
      // this.newContent.id = parseInt(this.tempid);
      this.digimonService.updateContent(this.newContent).subscribe(() => {
        this.updateContentEvent.emit();
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
        this.tempid = "";
      });
    }
    else {
      this.newContent.tags = this.temptags ? this.temptags.split(",") : [];
      // this.newContent.id = parseInt(this.tempid);
      this.digimonService.addContent(this.newContent).subscribe(newContentFromServer => {
        this.newContentEvent.emit(newContentFromServer);
        this.newContent = { title: '', description: '', creator: '', imgURL: "", type: "", tags: [] };
        this.temptags = "";
      });
    }
  }
   closeDialog(){
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}
function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.');
}

