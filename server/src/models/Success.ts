export class SuccessResponse<T> {
  public readonly statusCode: number
  public readonly message: string
  public readonly data?: T

  constructor(message: string, statusCode: number = 200, data?: T) {
    this.statusCode = statusCode
    this.message = message
    this.data = data
  }
}
