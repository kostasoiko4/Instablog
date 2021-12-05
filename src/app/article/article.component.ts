import { Component, OnInit } from '@angular/core';
import { LandmarksApiservicesService } from '../service/landmarksapiservices.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private _services:LandmarksApiservicesService) { }

  // display data
  articleDisplay:any = []

  // landmark id for article
  articleId = ''

  // loged In trigger
  editView:any

  // landmark coordinates
  latitude:any
  longitude:any

  ngOnInit(): void {
    this.articleId = this._services.sharedData
    this._services.article(this.articleId).subscribe((result) => {
      this.articleDisplay = result
      this.latitude = result.location[1]
      this.longitude = result.location[0]
    })
  }
}
