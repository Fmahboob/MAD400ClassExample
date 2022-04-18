import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { DigimonService } from './services/digimon.service';
import { LogUpdateServiceService } from './services/log-update-service.service';
import { MessageService } from './services/message.service';
import {SwUpdate} from "@angular/service-worker";
import { concat, first, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AssignmentSample';
 // individualDigimon?: Content;

  constructor(private messageService: MessageService, private log: LogUpdateServiceService, private appRef: ApplicationRef,
    private  updates: SwUpdate) {
  }

  ngOnInit(): void{
    // this.digimonService.getContentItem(2).subscribe(
    //   digimonAtIndex => this.individualDigimon = digimonAtIndex
    // );
    this.log.init();
    const appIsStable$ = this.appRef.isStable.pipe(
      first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());

    
  }
//   displayItem(id: string): void{
//     if (!parseInt(id)) {
//       this.messageService.add("Please enter a number value");
//       return;
//     }
//     let idNumber = parseInt(id);
//     this.digimonService.getContent().subscribe(digimonArray => {
//       let digimonInArray = digimonArray.find(individualDigimon => individualDigimon.id === idNumber);
//       if (!digimonInArray) {
//         this.messageService.add("Please enter a number value for a valid id");
//       }
//       else {
//         this.individualDigimon = digimonInArray;
//       }
//     });
//   }
 }
