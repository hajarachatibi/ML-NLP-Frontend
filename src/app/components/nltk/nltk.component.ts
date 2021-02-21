import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { OperationType } from 'src/app/Models/OperationType';
import { Router } from '@angular/router';
import { NltkService } from 'src/app/services/nltk.service';

@Component({
  selector: 'app-nltk',
  templateUrl: './nltk.component.html',
  styleUrls: ['./nltk.component.css']
})
export class NltkComponent implements OnInit {
  public response = [];
  public result: string = "";
  public myOpTypes = new Array<OperationType>();

  constructor(
    private http: HttpClient,
    private nltkService: NltkService,
    private router: Router,

  ) {
    this.myOpTypes = this.nltkService.myOpTypes;
  }

  // --- Function to get result of an NLP algo --- //
  action(form: NgForm) {
    this.nltkService.actionNLTK(form.value.text_area, form.value.operation_type)
      .subscribe(
        result => {
          this.result = result['result'];
          console.log(result['result']);
        },
        error => {
          console.log(error)
        }
      )
  }
  ngOnInit(): void {
  }

}
