import { Component, OnInit } from '@angular/core';
// get for node
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Blog';

  constructor(private http: HttpClient) { }
  public data="test";
  ngOnInit(): void {
    this.http
      .post("http://localhost:4200/blogOne",this.data).subscribe();  
}
}
