import { Component, OnInit } from '@angular/core';
import { LandmarksApiservicesService } from '../service/landmarksapiservices.service';
import { FormBuilder } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(
    private _services:LandmarksApiservicesService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  // display data
  articleDisplay:any = []

  // From item
  editForm = this.fb.group({
    title: [''],
    short_info: [''],
    description: ['']
  })

  // landmark id for article
  articleId = ''

  // loged In trigger
  editView = false

  // logedIn trigger
  logedIn:any
  
  // session Token
  sessionToken:any

  // landmark coordinates
  latitude:any
  longitude:any

  ngOnInit(): void {
    this.articleId = this._services.sharedData
    this.logedIn = localStorage.getItem('userId')
    this.sessionToken = localStorage.getItem('sessionToken')
    this.getArticle()
  }

  // change the view/edit
  changeEditView() {
    this.editView = !this.editView
  }

  // fetch article
  getArticle() {
    this._services.article(this.articleId).subscribe((result) => {
      this.articleDisplay = result
      this.latitude = result.location[1]
      this.longitude = result.location[0]
      this.editForm.patchValue({title: result.title})
      this.editForm.patchValue({short_info: result.short_info})
      this.editForm.patchValue({description: result.description})
    })
  }

  // submit changes
  onSubmit(){
    this._services.updateArticle(this.articleId, this.editForm.value, this.sessionToken)
      .pipe(catchError(error => {
        this.toast.error("Could not Save Article")
        return throwError(error)
      }))
      .subscribe(result => {
        this.toast.success("Article Saved")
        this.getArticle()
        this.changeEditView()
      })
  }
}
