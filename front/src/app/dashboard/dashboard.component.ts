import { SettingsService } from "./../services/settings/settings.service";
import { Component, OnInit } from "@angular/core";
import { PingService } from "../services/ping/ping.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
    public xScaleMin: Date;

    private timeInterval: any;

    constructor(public ping: PingService, private settings: SettingsService) {}

    ngOnInit() {
        let date = new Date(Date.now());
        date.setSeconds(date.getSeconds() - 60 * this.settings.timeInterval);
        this.xScaleMin = date;

        this.initInterval();
    }

    initInterval() {
        this.timeInterval = setInterval(() => {
            let date = new Date(Date.now());
            date.setSeconds(date.getSeconds() - 60 * this.settings.timeInterval);
            this.xScaleMin = date;
        }, 1000);
    }
}
