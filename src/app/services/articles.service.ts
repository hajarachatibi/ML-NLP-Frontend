import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const getTrueData = gql`
  query dataTrue(
    $title: String
  ){
    dataTrue(title: $title) {
      id
      title
      content
      url
    }
  }`

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private apollo: Apollo,
    private http: HttpClient
  ) { }
  isFake(text: string) {
    return this.http.get("http://127.0.0.1:5000/fakenews/" + text);
  }
  sentimentAnalysis(text: string) {
    return this.http.get("http://127.0.0.1:5000/sentimentanalysis/" + text);
  }
}
