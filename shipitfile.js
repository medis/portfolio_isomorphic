module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/portfolio',
      deployTo: '/var/www/portfolio',
      repositoryUrl: 'https://github.com/medis/portfolio.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 3,
      key: '~/.ssh/audrius_linode.pem',
      shallowClone: true
    },
    production: {
      servers: 'www-data@audrius.io'
    }
  });
};