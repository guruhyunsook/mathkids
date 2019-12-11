import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { SubstractComponent } from './substract/substract.component';
import { ContactComponent } from './contact/contact.component';
import { MultipleComponent } from './multiple/multiple.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'substract', component: SubstractComponent },
  { path: 'multiple', component: MultipleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    SubstractComponent,
    ContactComponent,
    MultipleComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
