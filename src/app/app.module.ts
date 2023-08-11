import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchBookComponent } from './research-book/research-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResearchDialogBoxComponent } from './research-dialog-box/research-dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewResearchComponent } from './new-research/new-research.component';
import { ResearchBookDashbordComponent } from './research-book-dashbord/research-book-dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RouterModule } from '@angular/router';
import { BharatLawComponent } from './bharat-law/bharat-law.component';


@NgModule({
  declarations: [
    AppComponent,
    ResearchBookComponent,
    ResearchDialogBoxComponent,
    NewResearchComponent,
    ResearchBookDashbordComponent,
    SidebarComponent,
    SearchComponent,
    SearchResultComponent,
    BharatLawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
