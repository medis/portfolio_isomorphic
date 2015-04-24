module.exports = function(actionContext, payload, done) {
  actionContext.dispatch('CHANGE_NAVEXPAND', payload);
  done();
};
