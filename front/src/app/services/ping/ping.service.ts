import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RealtimeService } from "../realtime/realtime.service";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PingService {
    private hosts: BehaviorSubject<any>;
    private mappedHosts: Map<string, any>;

    constructor(private realtime: RealtimeService, public http: HttpClient) {
        this.mappedHosts = new Map<string, any>();
        this.hosts = new BehaviorSubject<any>([]);

        this.realtime.onHostStatReceived().subscribe((res) => {
            if (!this.mappedHosts.has(res.host)) {
                this.mappedHosts.set(res.host, {
                    name: res.host,
                    series: []
                });
            }

            this.mappedHosts.get(res.host).series.push({
                name: new Date(res.time),
                value: res.responseTime !== "unknown" ? res.responseTime : 2500
            });

            this.hosts.next(Array.from(this.mappedHosts.values()));
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
            this.http.post<any>("http://localhost:9500/hosts", params).subscribe(
                (hosts) => {
                    for (let host of hosts) {
                        this.mappedHosts.set(host, {
                            name: host,
                            series: []
                        });
                    }

                    this.hosts.next(Array.from(this.mappedHosts.values()));
                    observer.next(true);
                },
                (err) => observer.error(err)
            );
        });
    }

    public deleteHost(host: string): Observable<any> {
        return new Observable<boolean>((observer) => {
            this.http.delete<any>(`http://localhost:9500/hosts/${host}`).subscribe(
                (res) => {
                    this.mappedHosts.delete(host);

                    this.hosts.next(Array.from(this.mappedHosts.values()));
                    observer.next(true);
                },
                (err) => observer.error(err)
            );
        });
    }
}
