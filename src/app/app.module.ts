import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { GraphQLModule } from './graphql.module';
import { NltkComponent } from './components/nltk/nltk.component';
import { ArticlesComponent } from './components/articles/articles.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'nltk',
    component: NltkComponent
  },
  {
    path: '',
    component: ArticlesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NltkComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    GraphQLModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    HomeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
