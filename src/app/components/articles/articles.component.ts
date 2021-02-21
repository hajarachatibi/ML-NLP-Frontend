import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Data } from 'src/app/Models/Data';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public data = new Array<Data>();
  private i = 0;
  public fakeResult = "";
  public sentimentResult = "";

  constructor(
    private articlesService: ArticlesService
  ) { }

  textareaForm(form: NgForm) { }

  // --- Function to predict fake news --- //
  fake(text: string) {
    this.articlesService.isFake(text)
      .subscribe(
        result => {
          this.data.length = 0;
          this.sentimentResult = "";
          this.fakeResult = result['result'];
          console.log(result['result']);
        },
        error => {
          console.log(error);
        }
      )
  }

  // --- Function to predict the sentence sentiment --- //
  sentiment(text: string) {
    this.articlesService.sentimentAnalysis(text)
      .subscribe(
        result => {
          this.data.length = 0;
          this.fakeResult = "";
          this.sentimentResult = result['result'];
          console.log(result['result']);
        },
        error => {
          console.log(error);
        }
      )
  }

  ngOnInit(): void {
  }

}
