import { PingService } from "./../services/ping/ping.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-config",
    templateUrl: "./config.component.html",
    styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
    public newHosts: string;
    constructor(public ping: PingService) {}

    ngOnInit() {
        this.newHosts = "";
    }

    add() {
        this.ping.addHosts(this.newHosts.split("\n")).subscribe(
            (res) => {
                this.newHosts = "";
                console.log("Success");
            },
            (err) => {
                console.error(err);
            }
        );
    }

    clear() {
        this.newHosts = "";
    }

    delete(host) {
        this.ping.deleteHost(host).subscribe(
            (res) => {
                // show toastr
            },
            (err) => console.error(err)
        );
    }
}
