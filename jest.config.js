const config = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)',
  ],
  testPathIgnorePatterns: [
    'dist',
  ],
}
export default config
