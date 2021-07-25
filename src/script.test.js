import { expect } from "@jest/globals";
import fun from "./script";

test('sample test', () => {
    expect(fun("Chopper")).toBe("Hello there, Chopper");
})
