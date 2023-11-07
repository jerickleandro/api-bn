import { SignupController } from "./signup";
describe("Signup Controller", () => {
  test("Deve retornar 400 caso o nome não tenha sido passado", () => {
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

  test("Deve retornar 400 caso o email não tenha sido passado", () => {
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
