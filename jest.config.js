module.exports = {
    // Set the test environment to Node.js
    testEnvironment: 'node',
  
    // Specify the test match pattern
    testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  
    // Enable verbose output for better test reporting
    verbose: true,
  
    // Optional: If you want to transform files (for example, using Babel)
    // transform: {
    //   '^.+\\.jsx?$': 'babel-jest',
    // },
  };
  