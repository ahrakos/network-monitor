import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SettingsService {
    public timeInterval: number;

    constructor() {
        this.timeInterval = 1;
    }
}
