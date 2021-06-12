import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/post';

const url = 'http://localhost:3000/posts';

@Injectable({ providedIn: 'root' })

export class PostService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Post[]>(url);
    }

    getById(id: string) {
        return this.http.get<Post>(`${url}/${id}`);
    }

    create(params: any) {
        return this.http.post(url, params);
    }

    update(id: string, params: any) {
        return this.http.put(`${url}/${id}`, params);
    }

    delete(id: string) {
        return this.http.delete(`${url}/${id}`);
    }
}
