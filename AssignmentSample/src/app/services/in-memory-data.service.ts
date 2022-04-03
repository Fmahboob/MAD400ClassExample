import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { DIGIMONLIST } from '../helper-files/contentDb'
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { } 
  createDb() {
    const digimon: Content[] = DIGIMONLIST;
    return {digimon};
  }
  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c => c.id ?? 0)) + 1 : 0;
  }
}
