require('dotenv').config()
const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner({
serverUrl: process.env.SONAR_API_URL,
options: {
  'sonar.login': process.env.SONAR_API_LOGIN,
  'sonar.sources': 'src',
  'sonar.tests': 'src',
  'sonar.inclusions': 'src/**/*.ts',
  'sonar.test.inclusions': 'src/**/*.test.ts',
  },
}, () => {
  console.log('Error Occurred while scanning');                    
});