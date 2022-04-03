import { Component, OnInit } from '@angular/core';
import { Content } from "../helper-files/content-interface";
import { DigimonService } from '../services/digimon.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  digimonList: Content[];
  titleFound?: boolean;

  constructor(private digimonService: DigimonService, private messageService: MessageService) {
    this.digimonList = [];
  }

  ngOnInit(): void {
    this.digimonService.getContent().subscribe(listOfDigimon => {
      this.digimonList = listOfDigimon;
      this.messageService.add("List loaded successfully!");
    });
  }
  
  checkForTitle(title: string): void {
    if (this.digimonList.some(d => d.title === title)) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    // if (this.digimonList.filter(d => d.title === title).length) {
    //   this.titleFound = true;
    // }
    // else {
    //   this.titleFound = false;
    // }
  }
  addContentToList(newContent: Content): void{
    // this.digimonList.push(newContent);
    // this.digimonList = [...this.digimonList]; //clone so it works with the pipes
    this.messageService.add("New content added and sent to list, id number is " + newContent.id)
    this.digimonService.getContent().subscribe(listOfDigimon => {
      this.digimonList = listOfDigimon;
      this.messageService.add("New content added and displayed on the list!");
    });
  }
  updateContentOnList(): void{
    this.digimonService.getContent().subscribe(listOfDigimon => {
      this.digimonList = listOfDigimon;
      this.messageService.add("Content on the list updated!");
    });
  }
}
