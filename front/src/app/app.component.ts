import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import io from "socket.io-client";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    public ips: string[];
    public newip: string;
    private socket: any;
    public hosts: any[];
    public results: any[];
    private mappedHosts: Map<string, number>;

    constructor(public http: HttpClient) {}

    ngOnInit() {
        this.ips = [];
        this.newip = "";
        this.hosts = [];
        this.mappedHosts = new Map<string, number>();

        this.socket = io("http://localhost:9500");

        this.socket.on("ip-result", (res) => {
            if (!this.mappedHosts.has(res.host)) {
                this.hosts.push({
                    name: res.host,
                    series: []
                });

                this.mappedHosts.set(res.host, this.hosts.length - 1);
            }

            this.hosts[this.mappedHosts.get(res.host)].series.push({
                name: new Date(res.time),
                value: res.responseTime !== "unknown" ? res.responseTime : 2500
            });

            console.log(...this.hosts);
            this.hosts = [...this.hosts];

            console.log(res);
            console.log(this.hosts);
        });
    }

    add() {
        this.ips.push(this.newip);
        this.newip = "";
    }

    send() {
        let params = {
            hosts: this.ips
        };

        this.http.post("http://localhost:9500/hosts/add", params).subscribe((res) => console.log(res), (err) => console.error(err));
    }
}
