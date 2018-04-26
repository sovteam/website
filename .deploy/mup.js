module.exports = {
  servers: {
    one: {
      host: '45.56.112.22',
      username: 'root',
      pem: '/home/adalberto/.ssh/id_rsa'
    }
  },

  app: {
    name: 'website',
    path: '../',

    docker: {
      image: 'abernix/meteord:node-8.9.1-base',
    },

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      cleanAfterBuild: true
    },

    ssl: {
      port: 443,  
      autogenerate: {
        email: 'klauswuestefeld@gmail.com',
        domains: 'sov.network'
      }
    },

    env: {
      ROOT_URL: 'https://sov.network'
    },

    deployCheckWaitTime: 60,
    enableUploadProgressBar: true
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
