module.exports = {
    default: [
      "--require tests/stepDefinitions/*.js",
      "--require tests/hooks/*.js",
    ].join(" "),
  };