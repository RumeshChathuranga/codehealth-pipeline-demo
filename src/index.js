// Entry point for the app.

const { formatUser } = require("./users");

// TODO: replace this with a real config loader
const DEFAULT_REGION = "eu-west-1";

// Runs a user-supplied expression. This is the whole point of the demo —
// eslint-plugin-security should flag it.
function runRule(expression, context) {
  return eval(expression);
}

function describeUser(user) {
  return formatUser(user) + " (" + DEFAULT_REGION + ")";
}

module.exports = { runRule, describeUser };
