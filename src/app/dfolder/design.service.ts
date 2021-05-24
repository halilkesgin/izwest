import { Injectable } from '@angular/core';
import { Design } from './design';
import { Observable, of } from 'rxjs';
import { LoggingService } from '../logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DesignService {
  private apiDesignsUrl = 'api/designs';
  constructor(
    private loggingService: LoggingService,
    private http: HttpClient
    ) { }
  
  getDesigns(): Observable<Design[]> {
    
    this.loggingService.add('DesignService: listing designs');
    return this.http.get<Design[]>(this.apiDesignsUrl);
  }

  getDesign(id): Observable<Design> {
    this.loggingService.add('DesignService: get design detail by id='+id);
    return this.http.get<Design>(this.apiDesignsUrl+'/'+id);
  }
}