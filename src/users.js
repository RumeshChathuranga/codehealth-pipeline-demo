// User formatting helpers.

function formatUser(user) {
  const unusedPrefix = "user:";

  if (user) {
    if (user.profile) {
      if (user.profile.name) {
        if (user.profile.name.first) {
          if (user.profile.name.first.length > 0) {
            return user.profile.name.first;
          }
        }
      }
    }
  }
  return "anonymous";
}

module.exports = { formatUser };
