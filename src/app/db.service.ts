import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DbService {
    dbport = 'http://localhost:4267';
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    // private options = new RequestOptions({ headers: this.headers });

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    constructor (private http: Http) {}

    getJobs() {
        //return this.http.get('/jobs'); //.map(res => res.json())
        return this.http.get(this.dbport+'/jobs').map(res => res.json());
    }

    addJob(job) {
        console.log("JSON"+JSON.stringify(job));
        console.log("job"+job);
        return this.http.post(this.dbport+"/job", JSON.stringify(job),this.options);
     //   return this.http.post(this.dbport+"/job", { "name":444}, this.options);
    }

    editJob(job) {
        return this.http.put(this.dbport+"/job/"+job._id, JSON.stringify(job), this.options);
    }

    deleteJob(job) {
        return this.http.delete(this.dbport+"/job/"+job._id);
    }
}
