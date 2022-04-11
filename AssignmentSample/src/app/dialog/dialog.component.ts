import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { inject } from '@angular/core/testing';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
 
  temptags: string = "";
  tempid: string = "";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() newContent: Content = {title: '', description: '', creator: '' };
  @Input() buttonText: String = "Add new Content";
 

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Content) {
    {
      this.tempid = String(data.id) ?? "";
      this.temptags = (data.tags ?? []).join();
    }
   }
  

  sendDataBack(): void { //alternative way to send data back
    this.dialogRef.close({
      content: this.data,
      tags: this.temptags,
      id: this.tempid
    });
  }
   closeDialog(){
     this.dialogRef.close();
   }

  ngOnInit(): void {
  }

}

