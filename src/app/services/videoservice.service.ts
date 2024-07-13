import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { video } from '../interfaces/video';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoserviceService {
  VTP: video[] = [
    {
      videoid: 0,
      userid: '',
      name: '',
      url: '',
      desc: '',
      videoCommentid: '',
      Videourl: '',
      createdtime: '',
    },
  ];
  arrayofvideos: video[] = [
    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      Videourl: '',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },

    {
      videoid: 1,
      userid: '986868668',
      Videourl: '',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
    {
      videoid: 1,
      userid: '986868668',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      Videourl: '',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
    {
      videoid: 1,
      userid: '986868668',
      Videourl: '',
      name: '986868668',
      url: '986868668',
      desc: '986868668',
      videoCommentid: '986868668',
      createdtime: '986868668',
    },
  ];
  count: any = 0;

  constructor(private http: HttpClient) {}

  videotoparent(): video[] {
    console.log('ooooooooooooooooooooooooooooooooooooo');
    console.log(this.VTP);
    this.VTP = [
      ...this.VTP,
      {
        Videourl: '',
        videoid: 1,
        userid: '986868668',
        name: '986868668',
        url: '986868668',
        desc: '986868668',
        videoCommentid: '986868668',
        createdtime: '986868668',
      },
    ];
    return this.VTP;
  }
  videotogetparent() {
    console.log('ooooooooooooooooooooooooooooooooooooooooooooo');

    return this.VTP;
  }
  videotogettparent() {
    console.log('ooooooooooooooooooooooooooooooooooooooooooooo');
    console.log(this.VTP);

    return this.VTP;
  }
  addvideotosave(newvideo: video): Observable<video[]> {
    // return
    this.http.post<any>('', newvideo);
    return of(this.arrayofvideos);
  }

  getvideo(): Observable<video[]> {
    return of(this.arrayofvideos);
  }
}
