export class Users {
    UserID?: Number;
    IsActive?: boolean;
    LoginId?: string;
    UserType?: number;
    email?: string;
    Name?: string;
    MobileNo?: string;
    constructor(
        UserID?: Number,
        IsActive?: boolean,
        LoginId?: string,
        UserType?: number,
        email?: string,
        Name?: string,
        MobileNo?: string
    ) {
        this.UserID = UserID;
        this.IsActive = IsActive;
        this.LoginId = LoginId;
        this.UserType = UserType;
        this.email = email;
        this.Name = Name;
        this.MobileNo = MobileNo;
    }
}