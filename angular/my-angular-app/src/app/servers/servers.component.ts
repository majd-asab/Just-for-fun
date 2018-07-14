import { Component } from "@angular/core"

@Component({
	selector:"app-servers",
	templateUrl:"./servers.component.html"
})
export class ServersComponent {
	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = "default";

	constructor(){
		setTimeout(() => {
			this.allowNewServer = true;
		},2000);
	}

	onCreateServer(){
		this.serverCreationStatus = "Server was created!\nName is "+this.serverName;
	}
  onUpdateServerName(event: any){
	  this.serverName = event.target.value;
  }
}
