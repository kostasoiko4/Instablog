import { Component, OnInit } from '@angular/core';
import { LandmarksApiservicesService } from '../service/landmarksapiservices.service';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {

  constructor(
    private _services:LandmarksApiservicesService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  // From item
  editForm = this.fb.group({
    title: [''],
    short_info: [''],
    description: ['']
  })

  // display data
  articleDisplay:any = []

  // landmark id for article
  articleId = ''

  // session Token
  sessionToken:any

  ngOnInit(): void {
    this.sessionToken = localStorage.getItem('sessionToken')
    this.articleId = this._services.sharedData
    this._services.article(this.articleId)
      .subscribe((result) => {
        this.articleDisplay = result
        this.editForm.patchValue({title: result.title})
        this.editForm.patchValue({short_info: result.short_info})
        this.editForm.patchValue({description: result.description})
      })
  }

  // submit changes
  onSubmit(){
    this._services.updateArticle(this.articleId, this.editForm.value, this.sessionToken)
      .subscribe(result => {
        this.location.back()
      })
  }
}
