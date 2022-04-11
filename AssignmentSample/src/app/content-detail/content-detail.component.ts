import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Content } from '../helper-files/content-interface';
import { DigimonService } from '../services/digimon.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  id?: number;
 
  individualDigimon: Content = {
    title: '',
    description: '',
    creator: ''
  };
  
  

  constructor(private route: ActivatedRoute, private digimonService: DigimonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     
      this.id = Number(params.get('id') );
      
      this.digimonService.getContentItem(this.id).subscribe((singleDigimon)=> {
        this.individualDigimon = singleDigimon
        this.messageService

      })
    })
  }

  outPutMessage(): void{
    this.messageService.add("ID: " + this.individualDigimon?.id + "\nTitle: " + this.individualDigimon.title);
    console.log("ID: " + this.individualDigimon?.id);
    
  }

}
