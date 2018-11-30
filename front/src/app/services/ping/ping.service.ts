import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RealtimeService } from "../realtime/realtime.service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PingService {
    private hosts: BehaviorSubject<any>;
    private mappedHosts: Map<string, number>;

    constructor(private realtime: RealtimeService, public http: HttpClient) {
        this.mappedHosts = new Map<string, number>();
        this.hosts = new BehaviorSubject<any>([]);

        this.realtime.onHostStatReceived().subscribe((res) => {
            let hosts = this.hosts.getValue();
            if (!this.mappedHosts.has(res.host)) {
                hosts.push({
                    name: res.host,
                    series: []
                });

                this.mappedHosts.set(res.host, hosts.length - 1);
            }

            hosts[this.mappedHosts.get(res.host)].series.push({
                name: new Date(res.time),
                value: res.responseTime !== "unknown" ? res.responseTime : 2500
            });

            this.hosts.next([...hosts]);
        });
    }

    public get Hosts(): Observable<any> {
        return this.hosts.asObservable();
    }

    public addHosts(hosts: string[]): Observable<any> {
        let params = {
            hosts: hosts
        };

        return new Observable<boolean>((observer) => {
            this.http.post<any>("http://localhost:9500/hosts/add", params).subscribe(
                (hosts) => {
                    let h = this.hosts.getValue();
                    for (let host of hosts) {
                        h.push(host);
                    }

                    this.hosts.next(h);
                    observer.next(true);
                },
                (err) => observer.error(err)
            );
        });
    }
}
