/**
 * Author: Udit Gandhi
 */
//Error type specific to http exception.
export default class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
