import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  public getAll() {
    return this.http.get<Post[]>(this.url);
  }

  public getById(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  public create(params: any) {
    return this.http.post(this.url, params);
  }

  public update(id: string, params: any) {
    return this.http.put(`${this.url}/${id}`, params);
  }

  public delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
