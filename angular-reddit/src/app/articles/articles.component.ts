import { Component, OnInit, HostBinding, Input } from '@angular/core'; //import Input
import { Article } from './articles.module'; 

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'card';
  @Input() article:Article

  constructor() {
    this.article = new Article('Angular 2','http://angular.io',10);
  }


  voteUp(): Boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown();
    return false; 
  }

  ngOnInit() {}
}