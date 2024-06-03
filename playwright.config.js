const { devices } = require('@playwright/test');

module.exports = {
  use: {
    viewport: { width: 1920, height: 1080 } 
  },
  projects: [
    {
      name: 'Chrome Stable',
      use: { 
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 }
      }
    },
 
    {
      name: 'Safari',
      use: { 
        browserName: 'webkit',
        viewport: { width: 1920, height: 1080 }
      }
    }
  ],
  testMatch: '**/*.test.js',
  reporters: [
    ['html', {
      outputFolder: './results',
    }]
  ]
};