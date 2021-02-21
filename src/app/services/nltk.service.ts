import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { OperationType } from '../Models/OperationType';

const getOpTypes = gql`
  query getOpTypes {
    operationTypes {
      id
      name
    }
}`;

@Injectable({
  providedIn: 'root'
})
export class NltkService {
  public data;
  public myOpTypes = new Array<OperationType>();
  public i = 0;

  constructor(
    private http: HttpClient,
    private apollo: Apollo) {
    this.getOperationTypes();
  }

  public getOperationTypes() {
    return this.apollo.query({
      query: getOpTypes
    }).subscribe(
      result => {
        console.log(result['data']['operationTypes'][0]['name']);
        this.i = 0;
        for (let index of Object.keys(result['data']['operationTypes'])) {
          this.myOpTypes[this.i] = new OperationType();
          this.myOpTypes[this.i].idOpType = result['data']['operationTypes'][index]['id'];
          this.myOpTypes[this.i].nameOpType = result['data']['operationTypes'][index]['name'];
          this.i = this.i + 1;
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  public actionNLTK(text: string, operation_type: string) {
    switch (operation_type) {
      case "603155988e5040b8a039236f":
        return this.http.get("http://127.0.0.1:5000/tokenization/" + text);
      case "603155988e5040b8a0392370":
        return this.http.get("http://127.0.0.1:5000/stopwords/" + text);
      case "603155988e5040b8a0392371":
        return this.http.get("http://127.0.0.1:5000/lemmatization/" + text);
      case "603155988e5040b8a0392372":
        return this.http.get("http://127.0.0.1:5000/stemming/" + text);
      case "603155988e5040b8a0392373":
        return this.http.get("http://127.0.0.1:5000/postagging/" + text);
      case "603155988e5040b8a0392375":
        return this.http.get("http://127.0.0.1:5000/tfidf/" + text);
      case "603155988e5040b8a0392374":
        return this.http.get("http://127.0.0.1:5000/bagofwords/" + text);
      default:
        break;
    }
  }
}
