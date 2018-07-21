import { Component } from "@angular/core"

@Component({
	selector:"app-servers",
	templateUrl:"./servers.component.html"
})
export class ServersComponent {
	allowNewServer = false;
	serverCreationStatus = "No server was created";
	serverName = "default";
	serverCreated = false;
	username = "";
  arrayOfServers = [];

	constructor(){
		setTimeout(() => {
			this.allowNewServer = true;
		},2000);
	}

	onCreateServer(){
	  this.serverCreated = true;
	  this.arrayOfServers.push(this.serverName);
		this.serverCreationStatus = "Server was created!\nName is "+this.serverName;
	}
  onUpdateServerName(event: any){
	  this.serverName = event.target.value;
  }
  // onUsernameEntered(event: any){
  //   this.usernameNotEmpty = (event.target.value == "")? false : true;
  // }

  resetUsername(){
	  this.username = "";
  }
}
