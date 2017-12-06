import { Common } from './miba-login.common';
declare var BAIDLogin: any;
import * as application from 'tns-core-modules/application';
export class MibaLogin extends Common {

    private BAIdSdk: any;

    private LManager: any​;

    private miBaPlugin: any​;
    constructor() {
        super();
        console.log('entro ios');
        try {
            console.log('el bundle');
            this.BAIdSdk = BAIDLogin;
            console.dir(this.BAIdSdk);

           console.log('que que');
        //     let callbackManager = this.miBaPlugin.CallbackManager.Factory.create();
        //     let callbackk =  this.miBaPlugin.BAIdCallback;
        //
        //     // Define some properties
        //     this.LManager = this.miBaPlugin.login.LoginManager​;
        //     this.BAIdSdk = this.miBaPlugin.BAIdSdk;
        //     this.BAIdSdk.initialize(application.ios.window, "Ba Mascot"​​);
        //     this.BAIdSdk.setEnvironment('https://miba.buenosaires.gob.ar/id/api/v1/', '338a5e1285a076b8be0993db489e30d3eb368857', false);
         } catch (error) {
        console.log('error');
     }
    }
    login() {

        let user: any = {};
        user.id = 4;
        user.email = 'mail@ios.com';
        user.firstName = 'profile.getFirstName()';
        user.firstName = 'profile.getLastName()';
        user.document = '7894230795';
        user.birthday = '2017-20-12';
        user.phone = '3434652154';
        user.cellphone = '46215854';
        user.gender = 'male';
        user.address = 'mas porco 44';
        user.token = '4f54fs5465vfcd';
        user.avatar = 'http://graph.facebook.com/1462759050458482/picture?type=larg';
        return user;
    }

    get() {
         return `Initialized MiBaSDK Ni idea che`;
         // return `Initialized MiBaSDK ${this.BAIdSdk.isInitialized()}`;
    }
}
