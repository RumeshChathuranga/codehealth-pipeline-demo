// Report builders.

// Each field reads its own value, so there is no dynamic property access.
const FIELDS = [
  ["identifier", (e) => e.id],
  ["display", (e) => e.displayName],
  ["plan", (e) => e.plan],
  ["region", (e) => e.region],
  ["seats", (e) => e.seats],
  ["active", (e) => e.active],
  ["owner", (e) => e.ownerEmail],
  ["created", (e) => e.createdAt],
  ["updated", (e) => e.updatedAt],
  ["billing", (e) => e.billingRef],
  ["tier", (e) => e.tier],
];

// Accounts and teams share a shape, so they share one builder.
function buildReport(entity) {
  const lines = ["== Report =="];
  for (const [label, read] of FIELDS) {
    lines.push(label.padEnd(11) + ": " + read(entity));
  }
  lines.push("------------");
  return lines.join("\n");
}

module.exports = { buildReport };
