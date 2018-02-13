import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'thumbnail',
})
export class ThumbnailPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let koko: string;
    // jaa split-funktiolla tiedoston nimi (value) osiin,
    // tallenna tulos nimellä temp
    const temp = value.split('.');
    // switch/case lause:
    switch (args) {
        // jos args on small, koko = 160,
      case ('small'):
        koko = '160';
        break;
        // jos args on medium, koko = 320,
      case ('medium'):
        koko = '320';
        break;
        // jos args on large, koko = 640
      case ('large'):
        koko = '640';
        break;
    }
    return temp[0] + '-tn' + koko + '.png';
  }

}
