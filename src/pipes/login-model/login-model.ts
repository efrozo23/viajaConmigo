import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LoginModelPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'loginModel',
})
export class LoginModelPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
