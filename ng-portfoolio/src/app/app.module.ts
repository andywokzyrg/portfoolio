import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {MusicPageComponent} from './music-page/music-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {HomePageComponent} from './home-page/home-page.component';

import {ContactLinkModule} from "./shared/components/ui/contact-link/contact-link.module";
import {ButtonModule} from "./shared/components/ui/button/button.module";
import {IconModule} from "./shared/components/ui/icon/icon.module";


@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        AboutPageComponent,
        ContactPageComponent,
        MusicPageComponent,
        ProjectsPageComponent,
        HomePageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactLinkModule,
        ButtonModule,
        IconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
