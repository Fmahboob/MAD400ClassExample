import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  newContent: Content;
  temptags: string = "";
  tempid: string = "";
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private digimonService: DigimonService) { 
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
}
