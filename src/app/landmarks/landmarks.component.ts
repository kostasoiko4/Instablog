import { Component, OnInit} from '@angular/core';
import { LandmarksApiservicesService } from '../service/landmarksapiservices.service';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css']
})

export class LandmarksComponent implements OnInit {

  constructor(private _services:LandmarksApiservicesService) { }

  // display data
  landmarksDisplay:any = []

  // image url
  modalImg:any

  // selected landmarks id
  landmarkId = ''

  // logedIn trigger
  logedIn:any

  ngOnInit(): void {
    this._services.landmarks().subscribe((result) => {
      this.landmarksDisplay = result
    })
    this.logedIn = localStorage.getItem('userId')
  }

  // change the landmarks id to the slected one
  changeLandmarkId(newId:any) {
    this.landmarkId = newId
    this.setId()
  }

  // pass the landmark id to parent
  setId() {
    this._services.sharedData = this.landmarkId
  }

  // change the img url to the selected one
  changeImgUrl(imgUrl:any) {
    this.modalImg = imgUrl
  }
}
