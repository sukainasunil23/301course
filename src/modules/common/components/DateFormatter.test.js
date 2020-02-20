import {DateFormatter} from "./DateFormatter"

describe("DateFormatter is being checked", () => {
  it("should return date", () => {
    expect(DateFormatter("2/18/2020")).toEqual("2020-02-18");
  });
  
  it("should return date", () => {
    expect(DateFormatter("12/18/2020")).toEqual("2020-12-18");
  });
  
  it("should return date", () => {
    expect(DateFormatter("2/2/2020")).toEqual("2020-02-02");
  });
})