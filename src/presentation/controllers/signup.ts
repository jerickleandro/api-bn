import { httpRequest, httpResponse } from "../protocols/http";
import { MissingParamError } from "../errors";
import { badRequest } from "../helpers/http-helper";
export class SignupController {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
  }
}
