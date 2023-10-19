module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@domain": "./src/domain",
          "@infra": "./src/infra",
          "@presentation": "./src/presentation",
        },
      },
    ],
  ]
};
