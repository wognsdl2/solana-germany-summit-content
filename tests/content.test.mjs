import assert from "node:assert/strict";
import { data } from "../content.js";

assert.equal(data.cta, "https://luma.com/solanasummitgermany");
assert.equal(data.location, "Berlin, Germany");
assert.ok(data.pillars.length >= 4);
assert.ok(data.audiences.includes("Builders") || data.audiences.includes("Developers"));
assert.ok(data.quote.length > 80);

console.log("Germany Summit content checks passed.");
