import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ServerSettingsService {
    public settings: any;

    constructor(private http: HttpClient) {
        this.settings = {};
        this.syncSettings();
    }

    syncSettings() {
        this.http.get<any>("http://localhost:9500/settings").subscribe(
            (settings) => {
                this.settings = settings;
            },
            (err) => console.error(err)
        );
    }

    update(): Observable<any> {
        let params = {
            settings: this.settings
        };

        return this.http.post("http://localhost:9500/settings", params);
    }
}
