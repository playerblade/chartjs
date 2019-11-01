import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  // title = 'practice'
  public pieChartType;
  public pieChartLabels;
  public pieChartData;
  public res1; public res2; public res3;
  public major;
  public pr1; public pr2; public pr3;

  constructor() {
    this.pieChartType = 'pie';
    this.pieChartLabels = ['ing. Ximena 01','ing. Ximena 02','ing. Ximena 03'];
    this.pieChartData = [0,0,0];
    this.res1 = this.pieChartData[0];
    this.res2 = this.pieChartData[1];
    this.res3 = this.pieChartData[2];
    this.major = 25;
  }

  votoOne(){
    if (this.res1+this.res2+this.res3 <this.major) {
      this.res1++;
      this.pieChartData = [this.res1,this.res2,this.res3];
      this.pr1 = "Prtje: "+100*this.res1/this.major+" %";
    }else{
      alert("esta lleno");
      this.res1;
    }
    console.log(this.res1);
  }

  votoTwo(){
    if (this.res1+this.res2+this.res3 <this.major) {
      this.res2++;
      this.pieChartData = [this.res1,this.res2,this.res3];
      this.pr2 ="Prtje: "+100*this.res2/this.major+" %";
    }else{
      alert("esta lleno");
      this.res2;
    }
    console.log(this.res2);
  }

  votoThre(){
    if (this.res1+this.res2+this.res3 <this.major) {
      this.res3++;
      this.pieChartData = [this.res1,this.res2,this.res3];
      this.pr3 ="Prtje: "+100*this.res3/this.major+" %";
    }else{
      alert("esta lleno");
      this.res3;
    }
    console.log(this.res3);
  }
  clean(){
    this.pr1 = '';
    this.pr2 = '';
    this.pr3 = '';
    this.res1 = 0;
    this.res2 = 0;
    this.res3 = 0;
    this.pieChartData = [0,0,0];
  }
}
