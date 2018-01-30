import { Common } from './miba-login.common';
import * as application from 'tns-core-modules/application';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as frameModule from 'tns-core-modules/ui/frame';
// declaro la variable del .framework para q no rompa el linter
declare var BAIDLogin: any;
export class MibaLogin extends Common {
    private userProfile = new BehaviorSubject<any>({});
    private miba: any;
    constructor() {
        super();

    }


    init( apiUrl: string, appId: string, appName: string) {
        let user: any = {};
        try {

        // // Inicializamos el plugin con la ventana de ios
        this.miba = BAIDLogin.alloc().initWithWindowError(application.ios.rootController);

        }
        catch (error) {
          console.dir(error);
        }
    }

    login() {
      // //hacemos un login en miba
      this.miba.loginWithOverSuccessCancelShowsCancelButton(
       application.ios.rootController, ()=> {
        if (this.miba.accessToken){
        let user = JSON.parse(this.miba.profileJSON);
           this.miba.dismiss();

          this.userProfile.next(user);

         }

       },
        () => {
          // funcion de login fallido o cancelado
        },
        false);
        return this.userProfile.asObservable();

    }

    dismiss() {
      this.miba.dismiss();

    }

    logOut(){
      this.miba.logoutWithSuccessFailure(() => {
        //
      }, () => {});
    }

    showProfile() {

      this.miba.showProfileWithOverSuccessCancel( application.ios.rootController,(update)=>{
        let user = JSON.parse(this.miba.profileJSON);
           this.miba.dismiss();
          this.userProfile.next(user);
    },()=>{
       this.miba.dismiss();
    });
    }

    get(){
        return this.userProfile.asObservable();
    }
}
