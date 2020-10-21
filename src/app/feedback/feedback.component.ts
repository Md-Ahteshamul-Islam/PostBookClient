import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
   constructor(private httpClient: HttpClient) { }
  // constructor() { }

    
  Fedbacks;
  Test;
  ngOnInit(): void {
     this.httpClient.get('https://localhost:44343/API/Values').subscribe(data => {
      //  console.log(data);
       this.Fedbacks = data;
     });
     this.Test = 1;
    // alert(this.Fedbacks.length);
  }

}
