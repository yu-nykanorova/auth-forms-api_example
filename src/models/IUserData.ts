
export interface IUserLoginData {
    email: string,
    password: string,
}

export interface IUserSignupData extends IUserLoginData {
    name: string,
    avatar?: string,
}

export interface IUserCreated extends IUserSignupData {
    role: string;
    id: number;
}