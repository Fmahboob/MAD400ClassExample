import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';
import { MatDialog } from'@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';
 

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Input() newContent: Content = { title: '', description: '', creator: '' };
  temptags: string = "";
  tempid: string = "";
  @Input() buttonText: string = "Add New Content";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private digimonService: DigimonService, public dialog: MatDialog) { 
    this.newContent = { title: '', description: '', creator: '' };
  }

  ngOnInit(): void { }

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

  openDialog(): void{

    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result: DialogComponent) => {
      if(result){

        this.newContent = result.newContent;
        this.tempid = result.tempid;
        this.temptags = result.temptags;
        this.modifyOrAddItemToParent();
      }
    });
    
    
}
}
