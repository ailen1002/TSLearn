import { MssqlDb } from '../modules/db1';

class UserClass {
    username:string | undefined;
    password:string | undefined;
}
var UserModel = new MssqlDb<UserClass>();

export { UserClass, UserModel };