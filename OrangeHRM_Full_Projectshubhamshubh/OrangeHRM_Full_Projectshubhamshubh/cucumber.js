
module.exports = {
  "default": {
    "require": [
      "step-definitions/**/*.ts",
      "support/world.ts",
      "support/hooks.ts"
    ],
    "requireModule": ["ts-node/register"],
    "format": ["progress"]
  }
}