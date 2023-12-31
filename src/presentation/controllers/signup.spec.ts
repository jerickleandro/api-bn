import { SignupController } from "./signup";
describe("Signup Controller", () => {
  test("Should return 400 if the name was not passed in the request", () => {
    const sut = new SignupController();
    const httpRequest = {
      body: {
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: name"));
  });

  test("Should return 400 if the email was not passed in the request", () => {
    const sut = new SignupController();
    const httpRequest = {
      body: {
        name: "Any Name",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };

    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error("Missing param: email"));
  });
});
