import { httpRequest, httpResponse } from "../protocols/http";
import { MissingParamError } from '../errors'
export class SignupController {
  handle(httpRequest: httpRequest): httpResponse {
    if(!httpRequest.body.name){
      return {
        statusCode: 400,
        body: new Error("Missing param: name")
      };
    }
    if(!httpRequest.body.email){
      return {
        statusCode: 400,
        body: new Error("Missing param: email")
      };
    }
  }
}
