import { Common } from './miba-login.common';
declare var BAIDLogin: any;
import * as application from 'tns-core-modules/application';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export class MibaLogin extends Common {

    private userProfile = new BehaviorSubject<any>({});

    constructor() {
        super();

    }


    init( apiUrl: string, appId: string, appName: string) {
        let user: any = {};
        user.miba_id = 2;
        user.email = "lmilitello@keetup.com";
        user.firstName = "Lucas";
        user.mobile = "34833944";
        user.phone = "45367893";
        user.address = "alguna calle 234";
        user.lastName = "Apellidop";
        user.document = "5427895443";
        user.document_type = "DNI";
        user.gender = "male";
        user.birthday = "12/04/1989";
        user.profileImage = "https://graph.facebook.com/10155649176666648/picture?type=square";
        this.userProfile.next(user);
    }

    login() {
        return this.userProfile.asObservable();
    }

    get(): Observable<any> {
        return this.userProfile.asObservable();
    }
}
