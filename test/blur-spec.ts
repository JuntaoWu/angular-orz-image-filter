import { expect } from "chai";

import { blur } from "../src/index";

describe("A suite", () => {
  const name = blur.name;
  it("contains spec with an expectation", () => {
    expect(true).equals(true);
    expect(name).equals("orz.blur");
  });
});
