import { login, logout } from "./index";
import axiosWrapper from "../../../../apis/axiosCreate";

it("google login", () => {
  expect(login({ tokenObj: {access_token: "access_token"},profileObj: {googleId: "googleId"}})()).toBeTruthy();
});

it("login",async () => {
  axiosWrapper.get = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
    const dispatch = jest.fn().mockImplementation(() => {});
    await login({ email: "johndoe@gmail.com", password: "Doe"})(dispatch);
});

it("logout", () => {
  expect(logout()).toEqual( {"payload": null, "type": "LOGOUT"});
});

// it("createUser", async () => {
//   axiosWrapper.get = jest
//     .fn()
//     .mockImplementation(() => Promise.resolve({ data: { card: "test" } }));
//   const dispatch = jest.fn();
//   const returnedFunction = createUser(userDetail[0]);
//   await returnedFunction(dispatch);
// });