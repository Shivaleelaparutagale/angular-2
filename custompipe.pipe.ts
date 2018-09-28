import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employee'
})
export class CustompipePipe implements PipeTransform {

  transform(value: string , gender: string, performance: string): any {
    if (gender.toLowerCase()=='male')
    {
      return 'Mr. '+value;
    }
    else{
      return 'Ms. '+value;
    }
    
  }
  
}
