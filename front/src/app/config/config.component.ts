import { PingService } from "./../services/ping/ping.service";
import { Component, OnInit } from "@angular/core";
import { NgxAlertsService } from "@ngx-plus/ngx-alerts";

@Component({
    selector: "app-config",
    templateUrl: "./config.component.html",
    styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
    public newHosts: string;
    constructor(public ping: PingService, private alerts: NgxAlertsService) {}

    ngOnInit() {
        this.newHosts = "";
    }

    add() {
        this.ping.addHosts(this.newHosts.split("\n")).subscribe(
            (res) => {
                this.newHosts = "";

                return this.alerts.notifySuccess({
                    title: "Success",
                    body: "Hosts were added successfully!"
                });
            },
            (err) => {
                return this.alerts.notifyError({
                    title: "Error",
                    body: "Hosts were not added!"
                });
            }
        );
    }

    clear() {
        this.newHosts = "";
    }

    delete(host) {
        this.alerts.alertWarning(
            {
                title: `Delete ${host.name}?`,
                text: "Are you sure you want to delete this host?"
            },
            (result) => {
                if (result.value !== undefined && result.value) {
                    this.ping.deleteHost(host.name).subscribe(
                        (res) => {
                            this.alerts.notifySuccess({
                                title: "Success",
                                body: "Host was deleted!"
                            });
                        },
                        (err) => {
                            this.alerts.notifyError({
                                title: "Error",
                                body: "Host was not deleted!"
                            });
                        }
                    );
                }
            },
            () => {}
        );
    }
}
