import { config } from 'dotenv'
import sonarqubeScanner from 'sonarqube-scanner'

config()

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
  // eslint-disable-next-line no-console
  console.log('Error Occurred while scanning')
})
