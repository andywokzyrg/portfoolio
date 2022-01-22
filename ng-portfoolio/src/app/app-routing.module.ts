import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {MusicPageComponent} from "./music-page/music-page.component";
import {ProjectsPageComponent} from "./projects-page/projects-page.component";

const routes: Routes = [{
    path: '', component: MainLayoutComponent, children: [
        {path: '', redirectTo: '/', pathMatch: 'full'},
        {path: '', component: HomePageComponent},
        {path: 'about', component: AboutPageComponent},
        {path: 'contacts', component: ContactPageComponent},
        {path: 'music', component: MusicPageComponent},
        {path: 'projects', component: ProjectsPageComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
