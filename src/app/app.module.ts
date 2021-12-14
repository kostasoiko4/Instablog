import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AuthModule } from './auth/auth.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { LandmarksComponent } from './landmarks/landmarks.component';

import { LandmarksApiservicesService } from './service/landmarksapiservices.service';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    LandmarksComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC_rDiZ5SVyq1d2q-yImlE3omU6tpOVnH0'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LandmarksApiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
