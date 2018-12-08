import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class URIService {
    public APP_URI: string = `http://localhost:5000/`;
    public ACTIONS: any = {
        GET_SETTINGS: "settings",
        UPDATE_SETTINGS: "settings",
        ADD_HOSTS: "hosts",
        DELETE_HOST: "hosts/"
    };
}
