import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { OperationType } from 'src/app/Models/OperationType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public response = [];
  public result: string = "";
  public myOpTypes = new Array<OperationType>();

  constructor(
    private http: HttpClient,
    private homeService: HomeService
  ) {
    this.myOpTypes = this.homeService.myOpTypes;
  }

  action(form: NgForm) {
  }

  ngOnInit(): void {
    this.myOpTypes = this.homeService.myOpTypes;
  }

}
