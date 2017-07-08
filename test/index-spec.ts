import { assert } from "chai";
import { suite, test, slow, timeout } from "mocha-typescript";

import * as angular from "angular";
import * as index from "../src/index";

@suite
class Index {
  @test
  hasIndex() {
    assert.ok(index, "index has been loaded");
  }
}
