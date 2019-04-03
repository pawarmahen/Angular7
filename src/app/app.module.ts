import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ProductComponent } from './main/product/product.component';
import { SupportComponent } from './main/support/support.component';
import { ClientsComponent } from './main/clients/clients.component';
import { CareersComponent } from './main/careers/careers.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { SliderComponent } from './design/slider/slider.component';
import { HeaderComponent } from './design/header/header.component';
import { HomeCardsComponent } from './design/home-cards/home-cards.component';
import { MaterialModule } from './material/material.module';
@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ProductComponent,
		SupportComponent,
		ClientsComponent,
		CareersComponent,
		ContactsComponent,
		SliderComponent,
		HeaderComponent,
		HomeCardsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		RouterModule.forRoot([
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'products',
				component: ProductComponent
			},
			{
				path: 'support',
				component: SupportComponent
			},
			{
				path: 'clients',
				component: ClientsComponent
			},
			{
				path: 'careers',
				component: CareersComponent
			},
			{
				path: 'contact',
				component: ContactsComponent
			}
		])
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
