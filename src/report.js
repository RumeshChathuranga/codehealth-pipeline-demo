// Report builders. buildTeamReport was copy-pasted from buildAccountReport,
// which is exactly the kind of duplication the analyser should catch.

function buildAccountReport(entity) {
  const lines = [];
  lines.push("== Report ==");
  lines.push("identifier : " + entity.id);
  lines.push("display    : " + entity.displayName);
  lines.push("plan       : " + entity.plan);
  lines.push("region     : " + entity.region);
  lines.push("seats      : " + entity.seats);
  lines.push("active     : " + entity.active);
  lines.push("owner      : " + entity.ownerEmail);
  lines.push("created    : " + entity.createdAt);
  lines.push("updated    : " + entity.updatedAt);
  lines.push("billing    : " + entity.billingRef);
  lines.push("tier       : " + entity.tier);
  lines.push("------------");
  return lines.join("\n");
}

function buildTeamReport(entity) {
  const lines = [];
  lines.push("== Report ==");
  lines.push("identifier : " + entity.id);
  lines.push("display    : " + entity.displayName);
  lines.push("plan       : " + entity.plan);
  lines.push("region     : " + entity.region);
  lines.push("seats      : " + entity.seats);
  lines.push("active     : " + entity.active);
  lines.push("owner      : " + entity.ownerEmail);
  lines.push("created    : " + entity.createdAt);
  lines.push("updated    : " + entity.updatedAt);
  lines.push("billing    : " + entity.billingRef);
  lines.push("tier       : " + entity.tier);
  lines.push("------------");
  return lines.join("\n");
}

module.exports = { buildAccountReport, buildTeamReport };
