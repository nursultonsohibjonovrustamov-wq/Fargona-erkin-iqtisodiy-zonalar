import test from "node:test";
import assert from "node:assert/strict";
import {
  copy,
  languages,
  parseLocation,
  searchEntries,
  localPath,
} from "../src/i18n.js";
for (const { code } of languages)
  test(`${code}: complete translations and functional search index`, () => {
    assert.deepEqual(
      Object.keys(copy[code]).sort(),
      Object.keys(copy.uz).sort(),
    );
    for (const [k, v] of Object.entries(copy[code])) {
      assert.ok(typeof v === "string" || Array.isArray(v), k);
      if (Array.isArray(v)) {
        assert.equal(v.length, copy.uz[k].length, k);
        assert.ok(
          v.flat().every((x) => typeof x === "string" && x.trim()),
          k,
        );
      } else assert.ok(v.trim(), k);
    }
    assert.equal(searchEntries(code).length, 9);
    assert.equal(new Set(searchEntries(code).map((x) => x.route)).size, 9);
  });
test("language-aware paths preserve page identity", () => {
  for (const { code } of languages)
    for (const route of [
      "/",
      "/zones/kokand",
      "/contact",
      "/resources/legal-check",
    ]) {
      assert.deepEqual(parseLocation(localPath(code, route)), {
        lang: code,
        route,
      });
    }
});
