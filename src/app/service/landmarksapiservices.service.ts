import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LandmarksApiservicesService {

  constructor(private _http:HttpClient) { }

  // shared data for page index
  sharedData:any

  // landmarks api
  landmarksApiUrl = "https://firefighter-2376.instashop.ae/api/landmarks"

  // article api
  articleApiUrl = "https://firefighter-2376.instashop.ae/api/landmarks/"

  // update article api
  updateArticleApiUrl = "https://firefighter-2376.instashop.ae/api/landmarks/"

  // fetch landmarks
  landmarks():Observable<any>{
    return this._http.get(this.landmarksApiUrl)
  }

  // fetch article
  article(articleId:any):Observable<any>{
    return this._http.get(this.articleApiUrl+articleId)
  }

  // update article
  updateArticle(articleId:any, update:any, token:any):Observable<any>{
    return this._http.put(this.updateArticleApiUrl+articleId, update ,{headers: {"x-sessionToken":token}})
  }
}
