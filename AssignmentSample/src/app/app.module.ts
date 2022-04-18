import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from'@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutngModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DialogComponent,
    PageNotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
    {
      dataEncapsulation: false,
      delay: 2000,
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatBadgeModule,
    MatChipsModule, 
   
    AppRoutngModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})

  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
