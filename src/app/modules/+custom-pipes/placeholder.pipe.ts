import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {
  transform(value: string, placeholderText: string = 'N/A'): string {
    return !!value ? value : placeholderText;
  }
}
