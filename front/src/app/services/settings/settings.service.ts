import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SettingsService {
    public timeInterval: number;
    public yMaxScale: number;

    constructor() {
        this.timeInterval = 1;
        this.yMaxScale = 2000;
    }
}
