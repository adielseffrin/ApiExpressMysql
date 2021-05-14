const env = process.env;

const config = {
    db:{
        host: env.DB_HOST || 'freedb.tech',
        user: env.DB_USER || 'freedbtech_adielseffrin',
        password: env.DB_PASSWORD || 'q1w2e3r4',
        database: env.DB_NAME || 'freedbtech_unisociescDbLanguages',
      },
      listPerPage: env.LIST_PER_PAGE || 10,
    };
    
    
module.exports = config;