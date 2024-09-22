import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personPipe',
  standalone: true,
})
export class PersonPipe implements PipeTransform {
  transform(name: string, index: number): string {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
