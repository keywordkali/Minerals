import { Pipe, PipeTransform } from '@angular/core';
import { Mineral } from '../mineral/mineral.class';


@Pipe({
  name: 'mineralSearch'
})
export class MineralSearchPipe implements PipeTransform {

  transform(minerals: Mineral[], searchCriteria: string = ''): Mineral[]  {
    if(searchCriteria == "")
    return minerals;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedMineral: Mineral[] = [];
    for(let mineral of minerals ){
if(mineral.id.toString().includes(searchCriteria)){
  selectedMineral.push(mineral);
  continue;
}
if(mineral.Name.toLowerCase().includes(searchCriteria)){
  selectedMineral.push(mineral);
  continue;
}

 return  selectedMineral;
  
}
}
}