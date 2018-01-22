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
        var user = {};
        try {
            this.miba = BAIDLogin.alloc().initWithWindowError(application.ios.window);
            this.miba.loginWithOverSuccessCancelShowsCancelButton(application.ios.rootController, function () {
                if (_this.miba.accessToken) {
                    var user_1 = JSON.parse(_this.miba.profileJSON);
                    _this.userProfile.next(user_1);
                }
            }, function () {
            }, false);
        }
        catch (error) {
            console.dir(error);
        }
    };
    MibaLogin.prototype.login = function () {
        return this.userProfile.asObservable();
    };
    MibaLogin.prototype.dismiss = function () {
        this.miba.dismiss();
    };
    MibaLogin.prototype.showProfile = function () {
        this.miba.showProfileWithOverSuccessCancel(application.ios.rootController, function (update) {
        }, function () { });
    };
    MibaLogin.prototype.get = function () {
        return this.userProfile.asObservable();
    };
    return MibaLogin;
}(miba_login_common_1.Common));
exports.MibaLogin = MibaLogin;
