import { URIService } from "./../uri/uri.service";
import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class RealtimeService {
    private socket: any;

    constructor(private URI: URIService) {
        this.socket = io(`${this.URI.APP_URI}`);
    }

    private onMessageReceived(event: string): Observable<any> {
        return new Observable<any>((observer) => {
            this.socket.on(event, (data) => {
                observer.next(data);
            });
        });
    }

    public onHostStatReceived(): Observable<any> {
        return this.onMessageReceived("ip-result");
    }
}
