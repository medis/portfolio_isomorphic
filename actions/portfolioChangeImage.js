module.exports = function(actionContext, payload, done) {
  actionContext.dispatch(payload.constant, payload);
  done();
};
