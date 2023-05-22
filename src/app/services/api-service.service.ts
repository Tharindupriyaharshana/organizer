import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_URL_LOCAL } from "../config/api.config";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  private apiUrl = API_URL_LOCAL;

  constructor(private http: HttpClient) {}

  getDates(startDate: string, daysOfComplete: number): Observable<any> {
    const url = `${this.apiUrl}?startDate=${startDate}&daysOfComplete=${daysOfComplete}`;
    return this.http.get(url);
  }
}
