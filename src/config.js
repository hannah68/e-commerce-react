export class LocalRoutes {
    static home = '/'
    static about = '/about'
    static shop = '/products'
    static contact = '/contact'
}

export class APIEndpoints{
    static baseUrl = 'http://localhost:3030'
    static about = `${APIEndpoints.baseUrl}/about`
    static shop = `${APIEndpoints.baseUrl}/products`
    static basket = `${APIEndpoints.baseUrl}/basket`
    static contact = `${APIEndpoints.baseUrl}/contact`
    static review = `${APIEndpoints.baseUrl}/reviews`
}