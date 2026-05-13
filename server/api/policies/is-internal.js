

module.exports = async function isInternal(req, res, proceed) {
  if (req.currentUser.id !== User.INTERNAL.id) {
    return res.notFound(); // Forbidden
  }

  return proceed();
};
