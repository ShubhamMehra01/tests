export default {
  default: {
    requireModule: ["ts-node/register"],
    import: [
      "smartPW/world.ts",
      "smartPW/support/**/*.ts",
      "smartPW/step-definitions/**/*.ts"
    ],
    paths: ["smartPW/features/**/*.feature"]

  }
}