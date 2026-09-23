// User formatting helpers.

function formatUser(user) {
  const first = user?.profile?.name?.first;
  return first && first.length > 0 ? first : "anonymous";
}

module.exports = { formatUser };
