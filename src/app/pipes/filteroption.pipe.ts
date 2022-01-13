import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteroption'
})
export class FilteroptionPipe implements PipeTransform {

  transform(item:any[], searchText:string): any[] {
    if(!item) return[];
    if(!searchText) return item;

    return item.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }

}
