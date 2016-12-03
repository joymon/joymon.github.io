import { Component,Input} from '@angular/core';
import {FeedService} from './feed.service'
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'feed',
  providers:[FeedService],
  templateUrl: 'app/feed.component.html',
  
})
export class FeedComponent {
  entries :array=[];
  constructor(private feedService:FeedService){
  
  }

  @Input('name') name:string;
  url:string;
  @Input() set feedUrl(colorName: string){
    this.url = colorName || this.url;
    console.log(this.url);
    this.feedService.getEntries(this.url)
                    .subscribe(data=> {
                      let res =data.json().responseData;
                      console.log(res.feed.entries.length);   
                      this.entries =res.feed.entries;
                      debugger;
                    }
    );
  }
  
  @Input('myHighlight') highlightColor: string;
  
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/