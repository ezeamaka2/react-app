module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/ezeamaka2/react-app",
  plugin: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/github",{
      asserts: [
        {path: "build.zip", label: "Build"},
        {path: "coverage.zip", label: "Coverage"}
      ]
    }]
  ]
}
