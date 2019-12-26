import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BlogHttpService {

  constructor(private http: HttpClient) { }

  apiKey = 'ZjM3ZTU2ZDExOWNjOGQzZDU4OTRlY2ViOTMzZTA0NDA3YzNjMzJjODFjNTljZTNjODNiNjFmMGY4MjY5NzU0ZjU1MzA1Y2YxMjhlMDljMDc3NGQ5YjllODlkZDJkNzU2N2FhMmRlMDUwMTU3YzAzOTJmNTcyYzMwZjNhNjk4ZDgzYQ==';

  getAllBlogs() {
    return this.http.get("https://blogapp.edwisor.com/api/v1/blogs/all?authToken=" + this.apiKey);
}

}