import React from "react";
import { shallow } from "../../../enzyme";
import {DateFormatter} from "./DateFormatter"

describe("DateFormatter is being checked", () => {
    it("DateFormatter", () => {
        var date = new Date("October 13, 2013 11:13:00")
        expect(DateFormatter(date)).toBe('2013-10-13')
      });
      it("DateFormatter", () => {
        var date = new Date("March 1, 2013 11:13:00")
        expect(DateFormatter(date)).toBe('2013-03-01')
      });
})