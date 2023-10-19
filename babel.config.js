module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@domain": "./src/domain",
          "@infra": "./src/infra",
          "@presentation": "./src/presentation",
          "@services": "./src/services",
        },
      },
    ],
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ]
};
