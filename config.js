var config = {
development: {
    //url to be used in link generation
    url: 'http://my.site.com',
    //mongodb connection settings
    database: {
        host:   'echokindness.com',
        user: "echoproj_ajpieri",
        password: "Tdae&s1234",
        database: "echoproj_main"
    },
    //server details
    server: {
        host: '127.0.0.1',
        port: '3000'
    }
},
production: {
    //url to be used in link generation
    url: 'http://echokindness.com',
    //mongodb connection settings
    database: {
      host:   'echokindness.com',
      user: "echoproj_ajpieri",
      password: "Tdae&s1234",
      database: "echoproj_main"
    },
    //server details
    server: {
        host:   '127.0.0.1',
        port:   '3000'
    }
}
};
module.exports = config;
