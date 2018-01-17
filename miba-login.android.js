"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miba_login_common_1 = require("./miba-login.common");
var application = require("tns-core-modules/application");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var MibaLogin = (function (_super) {
    __extends(MibaLogin, _super);
    function MibaLogin() {
        var _this = _super.call(this) || this;
        _this.userProfile = new BehaviorSubject_1.BehaviorSubject({});
        return _this;
    }
    MibaLogin.prototype.init = function (apiUrl, appId, appName) {
        var _this = this;
        try {
            this.miBaPlugin = baid.gcba.com.loginbaid;
            var callbackManager = this.miBaPlugin.CallbackManager.Factory.create();
            var callbackk = this.miBaPlugin.BAIdCallback;
            this.LManager = this.miBaPlugin.login.LoginManager;
            this.BAIdSdk = this.miBaPlugin.BAIdSdk;
            this.BAIdSdk.initialize(application.android.startActivity, appName);
            this.BAIdSdk.setEnvironment(apiUrl, appId, false);
        }
        catch (error) {
            console.log('error');
        }
        application.android.on(application.AndroidApplication.activityResultEvent, function (args) {
            if (baid.gcba.com.loginbaid.BaIdAccessToken) {
                var profile = baid.gcba.com.loginbaid.BAIdSdk.getProfile();
                _this.userProfile.next(profile);
            }
        });
    };
    MibaLogin.prototype.login = function () {
        if (this.BAIdSdk.isInitialized()) {
            this.LManager.getInstance().login(application.android.startActivity);
        }
        return this.userProfile.asObservable();
    };
    MibaLogin.prototype.showProfile = function () {
        if (this.BAIdSdk.isInitialized()) {
            this.LManager.getInstance().profile(application.android.startActivity);
        }
    };
    MibaLogin.prototype.clear = function () {
        this.userProfile.complete();
        this.userProfile.next(null);
    };
    MibaLogin.prototype.get = function () {
        return this.userProfile.asObservable();
    };
    return MibaLogin;
}(miba_login_common_1.Common));
exports.MibaLogin = MibaLogin;
