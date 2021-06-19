import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubFollowersService } from './github-followers/github-followers.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        AboutComponent,
                        GithubFollowersComponent,
                        HomeComponent,
                        NavbarComponent
                    ],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        RouterModule.forRoot([
                            { path: '', component: HomeComponent },
                            { path: 'followers', component: GithubFollowersComponent }
                        ])
                    ],
                    providers: [
                        GithubFollowersService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map