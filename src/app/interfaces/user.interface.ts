export interface UserResponse {
    ok: Boolean,
    user: User
}

export interface User {
    email:      string,
    first_name: string,
    last_name:  string,
    password:   string,
    username:   string,
    _id:        string
}