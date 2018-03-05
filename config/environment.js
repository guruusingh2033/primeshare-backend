'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // CORS
  allowedOriginsApi: [
    'http://localhost', 
    'http://localhost:4300',
    'http://bytecodetechnologies.co.in',
    'http://bytecodetechnologies.co.in/',
    'http://bytecodetechnologies.co.in/primeshare',
    'http://bytecodetechnologies.co.in/primeshare/'
  ],
  stripe:{
    apiKey: 'sk_test_mRU4BQ2S5rVyPHLYYKkpdx01' // client account
  },
  Access_key: 'AKIAIPSUKXZ4FZYNAIUQ',
  Secret_key: '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',
  bucketName: 'primeshare'
};