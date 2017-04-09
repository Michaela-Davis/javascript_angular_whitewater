import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rafterSort'
})
export class RafterSortPipe implements PipeTransform {

  transform(input: any[], sortValue: string) {
      if(input) {
        let output: any[] = [];
        input.forEach(function(rafter) {
         if (rafter.state === sortValue || sortValue === 'All') {
            output.push(rafter);
          }
        });
        return output;
      }
    }

}
