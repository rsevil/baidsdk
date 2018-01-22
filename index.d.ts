import { Common } from './miba-login.common';
import { Observable } from 'rxjs/Rx';
export declare class MibaLogin extends Common {
     get(): any;
     login(): any;
     clear(): any;
     showProfile(): any;
     init( apiUrl: string, appId: string, appName: string): any;
}

export declare class BAIDApi extends NSObject {
  static  alloc(): BAIDApi;
  static  new(): BAIDApi;

  }
