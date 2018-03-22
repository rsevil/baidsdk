import { Common } from './miba-login.common';
import * as application from 'tns-core-modules/application';
declare var baid: any;
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as Types from 'tns-core-modules/utils/types';
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />

export class MibaLogin extends Common {
    private userProfile = new BehaviorSubject<any>({});
    private BAIdSdk: any;
    private user: any;
    private LManager: any​;

    private miBaPlugin: any​;

    constructor() {
        super();


    }

    init( apiUrl: string, appId: string, appName: string) {
        try {
            this.miBaPlugin =  baid.gcba.com.loginbaid;
            let callbackManager = this.miBaPlugin.CallbackManager.Factory.create();
            let callbackk =  this.miBaPlugin.BAIdCallback;
            // Define some properties
            this.LManager = this.miBaPlugin.login.LoginManager​;
            this.BAIdSdk = this.miBaPlugin.BAIdSdk;
            this.BAIdSdk.initialize(application.android.startActivity, appName​​);
            this.BAIdSdk.setEnvironment(apiUrl, appId, false);
        } catch (error) {

        }

        application.android.on(application.AndroidApplication.activityResultEvent, (args: any ) => {
            if (baid.gcba.com.loginbaid.BaIdAccessToken) {
                let profile = baid.gcba.com.loginbaid.BAIdSdk.getProfile();
                this.userProfile.next(profile);

            }
        });
    }

    login() {
        // plugin inicializado
        if (this.BAIdSdk.isInitialized()) {
            this.LManager.getInstance().login(application.android.startActivity);
        }
        return this.userProfile.asObservable();

    }

    dismiss() {
      return;

    }

    logOut(){
      this.clear();
    }

    getProfile(){

          return this.userProfile.asObservable();

    }


    showProfile() {
        // plugin inicializado
        if (this.BAIdSdk.isInitialized()) {
            this.LManager.getInstance().profile(application.android.startActivity);
        }
    }

    clear() {
        this.userProfile.complete();
        this.userProfile.next(null);
    }

    get() {
        return this.userProfile.asObservable();
    }
}
