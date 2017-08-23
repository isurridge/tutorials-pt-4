module.exports = {
  apps: [{
    name: 'jarvis',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-91-59-202.compute-1.amazonaws.com',
      key: '~/.ssh/jarvis.pem',
      ref: 'origin/master',
      repo: 'git@github.com:aamcdanieli/jarvis.git',
      path: '/home/ubuntu/jarvis',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}