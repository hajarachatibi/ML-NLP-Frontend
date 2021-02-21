import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { GraphqlQueriesService } from './graphql-queries.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { HttpLink } from 'apollo-angular/http';
import { OperationType } from '../Models/OperationType';

const getOpTypes = gql`
  query getOpTypes {
    operationTypes {
      id
      nameOp
    }
}`;

const createOperation = gql`
  mutation createOperation(
    $text: String,
    $textType: String,
    $userId: String,
    $operationType: String
  ){
    createOperation(
      text:$text, 
      textType:$textType, 
      userId:$userId,
      operationType:$operationType
    ){
      operation {
        id
        text
        result
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public data;
  public myOpTypes = new Array<OperationType>();
  public i = 0;

  constructor(
    private apollo: Apollo) {
    this.getOperationTypes();
  }

  public getOperationTypes() {
    return this.apollo.query({
      query: getOpTypes
    }).subscribe(
      result => {
        console.log(result['data']['operationTypes'][0]['nameOp']);
        this.i = 0;
        for (let index of Object.keys(result['data']['operationTypes'])) {
          this.myOpTypes[this.i] = new OperationType();
          this.myOpTypes[this.i].idOpType = result['data']['operationTypes'][index]['id'];
          this.myOpTypes[this.i].nameOpType = result['data']['operationTypes'][index]['nameOp'];
          this.i = this.i + 1;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  public qry() {
  }

  public action(text: string, operation_type: string) {
    return this.apollo.mutate({
      mutation: createOperation,
      variables: {
        text: text,
        textType: "input",
        operationType: operation_type
      }
    });
  }

}
