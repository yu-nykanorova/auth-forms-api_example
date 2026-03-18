export interface IUserLoginData {
    email: string;
    password: string;
}

export interface IUserSignupData extends IUserLoginData {
    name: string;
    avatar?: string;
}
