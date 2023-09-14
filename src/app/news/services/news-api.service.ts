import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  baseUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }
  getSources(){
    return this.http.get(`${this.baseUrl}/sources?apiKey=${this.apiKey}`)
  }

  getArticlesBySourceId(sourceId: string){
    return this.http.get(`${this.baseUrl}/-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }

  initArticles(){
    return this.getArticlesBySourceId('bbc-news');
  }
}
