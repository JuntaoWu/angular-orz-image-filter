import { assert } from "chai";
import { suite, test, slow, timeout } from "mocha-typescript";

import * as angular from "angular";
import { blur } from "../src/index";

@suite
class Blur {
  @test
  isBlurNameCorrect() {
    const name = blur.name;
    assert.equal(name, "orz.blur", "blur.name equals orz.blur");
  }
}
