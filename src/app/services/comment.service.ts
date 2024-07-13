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
      useridCom: '6566',
      comment: 'kali game adudamaa',
      videoid: 'rama',
      username: 'rama',
    },
    {
      useridCom: '65656',
      comment: 'kali game adudamaa',
      videoid: 'rama',
      username: 'rama',
    },
    {
      useridCom: '65566',
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
    let updated = false;
    console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr');
    this.arraycomments = this.arraycomments.map((value) => {
      if (value.useridCom === data.useridCom) {
        updated = true;
        console.log('updateddd');
        return data;
      }
      return value;
    });

    if (!updated) {
      this.arraycomments.push(data);
    }
    // this.arraycomments.filter((value) => {
    //   if ((value.useridCom = data.useridCom)) {
    //     value = data;
    //   }
    // });
    this.arraycomments.push(data);
    return of(this.arraycomments);
    //this.http.post<any>('https://bakeryapi.onrender.com', data);
  }
}
