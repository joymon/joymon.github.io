import { Injectable }     from '@angular/core';
import { Http, Response,Jsonp } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';

@Injectable()
export class FeedService {
  private heroesUrl = 'app/heroes';  // URL to web API
  constructor (private http: Http,private json:Jsonp) {}
  getEntries (url:string):Observable  {
  let lurl='//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=JSONP_CALLBACK&q=' + encodeURIComponent(url);
    
    //let a=this.http.get(url);
  //console.log(a);
    let b=this.json.get(lurl);
  console.log(b);
  
    //return promise;
    return b;
                    //.map(this.extractData)
                    //.catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}