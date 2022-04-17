import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { ContentListComponent } from '../content-list/content-list.component';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ModifyContentComponentComponent } from '../modify-content-component/modify-content-component.component';
import { TypeFilterPipe } from '../type-filter.pipe';
import { HoverAffectDirective } from '../hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';






@NgModule({
  declarations: [
    ContentListComponent,
    ContentDetailComponent,
    ContentCardComponent,
    ModifyContentComponentComponent,
 
    TypeFilterPipe,
    HoverAffectDirective
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatChipsModule,
    FormsModule,
    MatDialogModule,
   MatButtonModule
  ]
})
export class ContentModule { }
