module.exports = {
    extends: ["./packages/configs/confs/eslint/index.js"],
    overrides: [
      {
        files: ["**/*.stories.*"],
        rules: {
          "import/no-anonymous-default-export": "off",
        },
      },
    ],
  };