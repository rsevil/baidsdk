"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var miba_login_common_1 = require("./miba-login.common");
var MibaLogin = (function (_super) {
    __extends(MibaLogin, _super);
    function MibaLogin() {
        var _this = _super.call(this) || this;
        console.log('entro ios');
        try {
            console.log('el bundle');
            _this.BAIdSdk = BAIDLogin;
            console.dir(_this.BAIdSdk);
            console.log('que que');
        }
        catch (error) {
            console.log('error');
        }
        return _this;
    }
    MibaLogin.prototype.login = function () {
        var user = {};
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
    };
    MibaLogin.prototype.get = function () {
        return "Initialized MiBaSDK Ni idea che";
    };
    return MibaLogin;
}(miba_login_common_1.Common));
exports.MibaLogin = MibaLogin;
