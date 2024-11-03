export class AppError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(message: string, statusCode: number, isOperational: boolean = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    // Ensure the name of this error is the same as the class name
    Object.setPrototypeOf(this, new.target.prototype)

    // Capture the stack trace (excluding the constructor)
    Error.captureStackTrace(this)
  }
}
