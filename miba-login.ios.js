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
        var user = {};
        try {
            this.miba = BAIDLogin.alloc().initWithWindowError(application.ios.rootController);
        }
        catch (error) {
        }
    };
    MibaLogin.prototype.login = function () {
        var _this = this;
        this.miba.loginWithOverSuccessCancelShowsCancelButton(application.ios.rootController, function () {
            if (_this.miba.accessToken) {
                var user = JSON.parse(_this.miba.profileJSON);
                _this.miba.dismiss();
                _this.userProfile.next(user);
            }
        }, function () {
        }, false);
        return this.userProfile.asObservable();
    };
    MibaLogin.prototype.dismiss = function () {
        this.miba.dismiss();
    };
    MibaLogin.prototype.logOut = function () {
        this.miba.logoutWithSuccessFailure(function () {
        }, function () { });
    };
    MibaLogin.prototype.showProfile = function () {
        var _this = this;
        this.miba.showProfileWithOverSuccessCancel(application.ios.rootController, function (update) {
            var user = JSON.parse(_this.miba.profileJSON);
            _this.miba.dismiss();
            _this.userProfile.next(user);
        }, function () {
            _this.miba.dismiss();
        });
    };
    MibaLogin.prototype.get = function () {
        return this.userProfile.asObservable();
    };
    return MibaLogin;
}(miba_login_common_1.Common));
exports.MibaLogin = MibaLogin;
