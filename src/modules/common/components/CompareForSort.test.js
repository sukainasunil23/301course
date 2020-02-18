import React from "react";
import { shallow } from "../../../enzyme";
import {comparePointsAsc ,comparePointsDesc ,compareCountAsc,compareCountDesc,compareValidityAsc,compareValidityDesc} from "./CompareForSort"

describe("compareforsort is being checked", () => {

    it("comparePointsAsc checking", () => {
        expect(comparePointsAsc({cardPoints:1},{cardPoints:2})).toBe(-1);
      });
      it("comparePointsAsc checking", () => {
        expect(comparePointsAsc({cardPoints:2},{cardPoints:1})).toBe(1);
      });


})

describe("comparePointsDesc is being checked", () => {

    it("comparePointsDesc checking", () => {
        expect(comparePointsDesc({cardPoints:1},{cardPoints:2})).toBe(1);
      });
      it("comparePointsDesc checking", () => {
        expect(comparePointsDesc({cardPoints:2},{cardPoints:1})).toBe(-1);
      });


})

describe("compareCountAsc is being checked", () => {

    it("compareCountAsc checking", () => {
        expect(compareCountAsc({cardCount:1},{cardCount:2})).toBe(-1);
      });
      it("compareCountAsc checking", () => {
        expect(compareCountAsc({cardCount:2},{cardCount:1})).toBe(1);
      });


})

describe("compareCountDesc is being checked", () => {

    it("compareCountDesc checking", () => {
        expect(compareCountDesc({cardCount:1},{cardCount:2})).toBe(1);
      });
      it("compareCountDesc checking", () => {
        expect(compareCountDesc({cardCount:2},{cardCount:1})).toBe(-1);
      });


})

describe("compareValidityAsc is being checked", () => {

    it("compareValidityAsc checking", () => {
        expect(compareValidityAsc({cardExpiryDate:1},{cardExpiryDate:2})).toBe(-1);
      });
      it("compareValidityAsc checking", () => {
        expect(compareValidityAsc({cardExpiryDate:2},{cardExpiryDate:1})).toBe(1);
      });


})

describe("compareValidityDesc is being checked", () => {

    it("compareValidityDesc checking", () => {
        expect(compareValidityDesc({cardExpiryDate:1},{cardExpiryDate:2})).toBe(1);
      });
      it("compareValidityDesc checking", () => {
        expect(compareValidityDesc({cardExpiryDate:2},{cardExpiryDate:1})).toBe(-1);
      });


})