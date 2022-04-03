import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { DigimonService } from './services/digimon.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AssignmentSample';
  individualDigimon?: Content;

  constructor(private digimonService: DigimonService, private messageService: MessageService) {
  }

  ngOnInit(): void{
    this.digimonService.getContentItem(2).subscribe(
      digimonAtIndex => this.individualDigimon = digimonAtIndex
    );
  }
  displayItem(id: string): void{
    if (!parseInt(id)) {
      this.messageService.add("Please enter a number value");
      return;
    }
    let idNumber = parseInt(id);
    this.digimonService.getContent().subscribe(digimonArray => {
      let digimonInArray = digimonArray.find(individualDigimon => individualDigimon.id === idNumber);
      if (!digimonInArray) {
        this.messageService.add("Please enter a number value for a valid id");
      }
      else {
        this.individualDigimon = digimonInArray;
      }
    });
  }
}
