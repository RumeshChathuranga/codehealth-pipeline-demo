// Entry point for the demo app.

const { formatUser } = require("./users");

const DEFAULT_REGION = "eu-west-1";

// A Map keyed by rule name, so nothing user-supplied is executed and no
// property is looked up dynamically on a plain object.
const RULES = new Map([
  ["isEmpty", (value) => value === undefined || value === null || value === ""],
  ["isPositive", (value) => typeof value === "number" && value > 0],
]);

function runRule(name, value) {
  const rule = RULES.get(name);
  if (!rule) {
    throw new Error("Unknown rule: " + name);
  }
  return rule(value);
}

function describeUser(user) {
  return formatUser(user) + " (" + DEFAULT_REGION + ")";
}

module.exports = { runRule, describeUser };
