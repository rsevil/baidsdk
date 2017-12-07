import { Common } from './miba-login.common';
import { Observable } from 'rxjs/Rx';
export declare class MibaLogin extends Common {
     get(): Observable<any>;
     login(): any;
     clear(): any;
     init( apiUrl: string, appId: string, appName: string): any;
}
