module.exports = function(actionContext, payload, done) {
  actionContext.dispatch('CHANGE_IMAGE', payload);
  done();
};
