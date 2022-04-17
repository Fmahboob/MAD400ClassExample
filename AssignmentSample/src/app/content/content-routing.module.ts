import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentDetailComponent } from '../content-detail/content-detail.component';
import { ContentListComponent } from '../content-list/content-list.component';
import { ContentComponent } from './content.component';

const routes: Routes = [{ path: "", component: ContentListComponent },
{path: ":id", component: ContentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
