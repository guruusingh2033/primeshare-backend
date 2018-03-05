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
  Access_key: 'AKIAJH62T7OAJWMELNDQ',
  Secret_key: '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',
  bucketName: 'primeshare'
};