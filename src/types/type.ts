export type Response<T> = {
    data: T,
    message: string,
    statusCode: number,
    isError: boolean
};

export type TokenResponse = {
    acessToken: string,
    refreshToken: string,
    tokenType: string,
    expiredAt: string
}

export type LoginRequest = {
    email: string,
    password: string
}