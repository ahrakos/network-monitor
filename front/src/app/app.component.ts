import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

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
    }
}
