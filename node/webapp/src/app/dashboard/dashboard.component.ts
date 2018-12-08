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

    constructor(public ping: PingService, public settings: SettingsService) {}

    ngOnInit() {
        let date = new Date(Date.now());
        date.setSeconds(date.getSeconds() - 60 * this.settings.timeInterval);
        this.xScaleMin = date;

        this.initInterval();
    }

    initInterval() {
        setInterval(() => {
            let date = new Date(Date.now());
            date.setSeconds(date.getSeconds() - 60 * this.settings.timeInterval);
            this.xScaleMin = date;
        }, 1000);
    }

    yFormatting(value) {
        return value + "ms";
    }

    select(value) {}
}
