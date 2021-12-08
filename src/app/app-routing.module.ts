import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandmarksComponent } from "./landmarks/landmarks.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
    {path:'', component:LandmarksComponent}, // home page
    {path:'article', component:ArticleComponent}, // articel page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }