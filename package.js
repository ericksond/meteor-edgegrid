Package.describe({
  name: 'ericksond:edgegrid',
  version: '0.0.1',
  summary: 'Akamai {OPEN} EdgeGrid Wrapper for Meteor',
  git: 'https://github.com/ericksond/meteor-edgegrid',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('edgegrid.js', 'server');
  api.export('EdgeGrid')
});

Npm.depends({ 'edgegrid', '1.1.3' })
