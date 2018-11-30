import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class RealtimeService {
    private socket: any;

    constructor() {
        this.socket = io("http://localhost:9500");
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
