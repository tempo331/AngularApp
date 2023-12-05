import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [LoginComponent],
})
export class LoginModule {}
