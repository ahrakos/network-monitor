import { URIService } from "./../uri/uri.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ServerSettingsService {
    public settings: any;

    constructor(private http: HttpClient, private URI: URIService) {
        this.settings = {};
        this.syncSettings();
    }

    syncSettings() {
        this.http.get<any>(`${this.URI.APP_URI}${this.URI.ACTIONS.GET_SETTINGS}`).subscribe(
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

        return this.http.post(`${this.URI.APP_URI}${this.URI.ACTIONS.GET_SETTINGS}`, params);
    }
}
