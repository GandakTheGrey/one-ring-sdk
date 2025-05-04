export interface ResponseObject<T> {
    result: T,
    error?: string,
    success: boolean
}