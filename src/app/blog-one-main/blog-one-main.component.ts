import { Component, Input, OnInit } from '@angular/core';
// iframe 
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-one-main',
  templateUrl: './blog-one-main.component.html',
  styleUrls: ['./blog-one-main.component.scss']
})
export class BlogOneMainComponent implements OnInit {
  @Input() headerTextTop?: string;
  @Input() toptekst?:string;
  @Input() linkImgOne?:string;
  @Input() tekstOnder1?:string;
  @Input() tekstOnder2?:string;
  @Input() linkImgTwo?:string;

 // second container
 @Input() imgSecondContainerOne?:string;
 @Input() iframeSourceOne?:string;
 @Input() iframeSourceTwo?:string;

 @Input() h2One?:string;
 @Input() h2Two?:string
 constructor(private sanitizer:DomSanitizer) { }
 // iframes
 banner:any = 'url("https://i.pinimg.com/originals/bb/bd/6d/bbbd6d96fc5b0dcb934180870dba69d5.png")';
getUrl(post:any)
{
  return this.sanitizer.bypassSecurityTrustResourceUrl(post);
}

  ngOnInit(): void {
  }

}
