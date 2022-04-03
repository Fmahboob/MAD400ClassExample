import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { DIGIMONLIST } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };
    
  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.add("Content array loading!");
    return this.http.get<Content[]>("api/digimon");
  }

  getContentItem(id: number): Observable<Content>{
    this.messageService.add(`Content Item at id: ${id}`);
    // the fancy way
    return this.http.get<Content>("api/digimon/" + id);
    // this.http.get<Content[]>("api/digimon").subscribe(digimonList => );

  }

  addContent(newContentItem: Content): Observable<Content>{
    this.messageService.add("Adding new content to the server!");
    return this.http.post<Content>("api/digimon", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any>{
    this.messageService.add("Updating content on the server, id: " + contentItem.id);
    return this.http.put("api/digimon", contentItem, this.httpOptions);
    }
}
