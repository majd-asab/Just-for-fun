import { Component } from "@angular/core";

@Component({
	selector: "app-banner-text",
	template: `
	<span>Enter banner text: </span><input type="text" [(ngModel)]="text">
	<div><h3>{{ text }}</h3></div>
	`,
	styles:[`
		div {
			background-color: darkred;
			color:white;
			text-align: center;
		} 
	`]
})

export class BannerTextComponent{
	
}