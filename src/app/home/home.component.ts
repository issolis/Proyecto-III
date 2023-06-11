import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { linkedList } from '../linkedList.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any []= [];
  fileTree: any = ""; 
  list:linkedList | null

  constructor(private apiService : ApiService){
    this.list=new linkedList(); 
    }
 
  sendInformation(): void{
   // this.fileTree=this.fileTree+this.list?.head?.data; 
    /*for (let item of this.data) {
      for (let key in item) {
        console.log(key + ": " + item[key]);
      }
    }*/
    this.apiService.sendData(this.fileTree).subscribe(response => {
      for (let item of response) {
        for (let key in item) {
          console.log(key + ": " + item[key]);
        }
      }
      this.data=response;
      console.log(response);
    });
  }
  ngOnInit(): void{
    this.llenarData();
  }
  llenarData(){
   
    this.apiService.urlApi="http://localhost:8080/endpoint";
 
  }
}