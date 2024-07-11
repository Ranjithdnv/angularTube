import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface comment {
  useridCom: string;
  comment: string;
  videoid: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  arraycomments = [
    {
      useridCom: '656',
      comment: 'ami chstunav dud',
      videoid: 'rama',
      username: 'ranjith',
    },
    {
      useridCom: '656',
      comment: 'kali game adudamaa',
      videoid: 'rama',
      username: 'rama',
    },
  ];
  constructor(private http: HttpClient) {}
  getComment(): Observable<comment[]> {
    return of(this.arraycomments);
  }
  getCommentone(a: string): Observable<comment[]> {
    const data = {
      useridCom: '656',
      username: 'ranjith',
      comment: 'kk',
      videoid: 'ram',
    };

    this.http.get<any>(
      'https://bakeryapi.onrender.com'
      //options
    );

    this.http.post<any>('https://bakeryapi.onrender.com', data);
    return of(this.arraycomments);
  }

  addComment(data: comment): Observable<comment[]> {
    this.arraycomments.push(data);
    return of(this.arraycomments);
    //this.http.post<any>('https://bakeryapi.onrender.com', data);
  }
}
