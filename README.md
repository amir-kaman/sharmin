// 6. Secrets Setup:
// In GitHub repo > Settings > Secrets and variables > Actions:
// Add a new secret:
// Name: NPM_TOKEN
// Value: <your GitHub Personal Access Token with 'write:packages'>

// 7. Usage:
// Tag a release:
// git tag v1.0.0
// git push origin v1.0.0
// → GitHub Actions builds and publishes your lib!