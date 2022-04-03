import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(digimonList: Content[], type?: string): Content[] {
    // return digimonList.filter(digimon => digimon.type === type); // technically this solves the null check too
    return digimonList.filter(digimon => {
      console.log("Digimon name: ", digimon.title, " type is set to ", digimon.type);
      return type ? digimon.type === type : (!digimon.type || digimon.type === '');
    });
  }

}
