module.exports = {
    default: [
      "--require tests/stepDefinitions/*.js",
      "--require tests/hooks/*.js",
      "--parallel 4"
    ].join(" "),
    // default:{
    //   require:[
    //     "--require tests/stepDefinitions/*.js",
    //     "--require tests/hooks/*.js",

    //   ],
    //   parallel: 4
    // }
  };