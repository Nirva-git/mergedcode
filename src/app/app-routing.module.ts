import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewResearchComponent } from '../app/new-research/new-research.component'
import { ResearchBookDashbordComponent } from './research-book-dashbord/research-book-dashbord.component';
import { ResearchBookComponent } from './research-book/research-book.component';
import { BharatLawComponent } from './bharat-law/bharat-law.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'newresearch', component: NewResearchComponent },
  {
    path: 'dashboard',
    component: BharatLawComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
