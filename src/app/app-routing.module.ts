import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandmarksComponent } from "./landmarks/landmarks.component";
import { ArticleComponent } from "./article/article.component";
import { EditarticleComponent } from "./editarticle/editarticle.component";

const routes: Routes = [
    {path:'', component:LandmarksComponent}, // home page
    {path:'article', component:ArticleComponent}, // articel page
    {path:'editArticle', component:EditarticleComponent} // edit article page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }