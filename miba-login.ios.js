"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miba_login_common_1 = require("./miba-login.common");
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
    };
    MibaLogin.prototype.login = function () {
        return this.userProfile.asObservable();
    };
    MibaLogin.prototype.get = function () {
        return this.userProfile.asObservable();
    };
    return MibaLogin;
}(miba_login_common_1.Common));
exports.MibaLogin = MibaLogin;
