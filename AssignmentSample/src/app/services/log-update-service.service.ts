import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {MatSnackBar } from'@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class LogUpdateServiceService {

  constructor(private logUpdates: SwUpdate, private snackbar: MatSnackBar ) { 
    

  }

  public init(){
    this.logUpdates.versionUpdates.subscribe(event => {
      switch(event.type){
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version`);
          break;
        case 'VERSION_READY':
          console.log(`New app version is ready for use`);
          let snackBar = this.snackbar.open("Update Available.", "Update");
          snackBar.onAction().subscribe(() => {
            this.logUpdates.activateUpdate().then(() => document.location.reload());
          });
          break;
      }
    });
  }

  
}
