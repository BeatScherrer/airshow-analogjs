import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
}

export interface Program {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  Thumbnail: StrapiImage | StrapiImage[] | null;
  Highlight: boolean;
  Saturday: boolean;
  Sunday: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiSingleResponse<T> {
  data: T;
  meta: unknown;
}

/** TODO: use api key from environment */
@Injectable({
  providedIn: "root",
})
export class ProgramService {
  private apiUrl = "http://localhost:1337/api/programs";
  private headers = new HttpHeaders({
    Authorization:
      "Bearer ea219ecdada57cfff2a297963c350c5ccfdd9211352fe6eca63e9b3c0e58d32ffdd6893e2fe036f76e2d11565b839d8e4b25e05a5a85a1a1d4ae7ff236571fbcae54e07d6a44f22fddb08a5ebc8ab5ee6ed38be3689786cd761ed48fc1fb19f456649072e7886c8f1ab3081a5eae47970fc8c0fc0106e1eada03adcfd06dfd73",
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient) {}

  getProgram(): Observable<StrapiResponse<Program>> {
    return this.http.get(`${this.apiUrl}?populate=*`, {
      headers: this.headers,
    }) as Observable<StrapiResponse<Program>>;
  }

  getProgramById(id: string): Observable<StrapiResponse<Program>> {
    return this.http.get(`${this.apiUrl}/${id}?populate=*`, {
      headers: this.headers,
    }) as Observable<StrapiResponse<Program>>;
  }
}
