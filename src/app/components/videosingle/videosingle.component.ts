import { Component, OnInit } from '@angular/core';
import { CommentService, comment } from '../../services/comment.service';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { CommentReducer, setName } from '../../commentstore/commentreducer';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-videosingle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatIconModule],
  templateUrl: './videosingle.component.html',
  styleUrl: './videosingle.component.scss',
})
export class VideosingleComponent implements OnInit {
  comadd: comment = {
    useridCom: '656',
    username: 'ranjith',
    comment: 'kk',
    videoid: 'rama',
  };
  inputrep: string = '';
  inputrepboolean: boolean = false;
  showCoomments: boolean = false;
  coomentchanding: string = 'pink';

  constructor(
    private common: CommentService,
    private store_comment: Store<{ comments: comment[] }>,
    private store: Store<any>
  ) {
    // console.log(this.store_comment.select('profile'));
    store.select('items').subscribe(
      (res) => {
        console.log(res.items);
        // this.data$ = res;
      },
      (err) => {}
    );
    store_comment.select('comments').subscribe(
      (res) => {
        console.log(res);
        // this.data$ = res;
      },
      (err) => {}
    );
  }
  com: comment[] = this.common.arraycomments;
  ngOnInit(): void {
    this.common.getComment().subscribe(
      (res) => {
        this.com = res;
        console.log(this.com);
      },
      (error) => {}
    );
  }
  repinput(nameid: string) {
    this.inputrep = nameid;
    this.inputrepboolean = !this.inputrepboolean;
  }

  addtocomments(data: comment) {
    console.log(data);
    // this.common.addComment(data);
    console.log(this.store_comment.select('comments'));
    this.store_comment.dispatch(
      setName({ ...data, comment: this.coomentchanding })
    );
  }
  addcommfunc() {
    this.showCoomments = !this.showCoomments;
    // this.common.addComment(this.comadd).subscribe(
    //   (res) => {
    //     this.com = res;
    //     console.log(this.com);
    //   },
    //   (error) => {}
    // );
  }
}
