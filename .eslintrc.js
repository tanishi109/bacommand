module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true,
    "node": true
  },
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
      }
  },
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "no-console": "error",

    "accessor-pairs": ["error", { "getWithoutSet": true }],
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "complexity": ["error", 9],
    "consistent-return": 0,
    "curly": 0,
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": 0,
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-implicit-coercion": ["error", {
      "allow": ["!!"],
    }],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": 0,
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": ["error", { "props": false }],
    "no-process-env": 0,
    "no-proto": "error",
    "no-redeclare": "error",
    "no-return-assign": 0,
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-void": "error",
    "no-warning-comments": 0,
    "no-with": "error",
    "radix": "error",
    "vars-on-top": 0,
    "wrap-iife": ["error", "inside"],
    "yoda": "error",

    "strict": 0,

    "init-declarations": 0,
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    "no-restricted-globals": "error",
    "no-shadow": ["error", { "allow": ["done", "next", "callback", "err"] }],
    "no-shadow-restricted-names": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": 0,
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    "no-use-before-define": ["error", {"classes": false}],

    "global-require": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",
    "no-restricted-imports": 0,
    "no-restricted-modules": 0,
    "no-sync": "error",

    "array-bracket-spacing": ["error", "never"],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "camelcase": ["error", { "properties": "never" }],
    "comma-dangle": ["error", "always-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-this": ["error", "self"],
    "eol-last": "error",
    "func-names": 0,
    "func-style": ["error", "expression", { "allowArrowFunctions": true }],
    "id-blacklist": 0,
    "id-match": 0,
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", {
      "beforeColon": false,
      "afterColon": true,
    }],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": 0,
    "max-depth": ["error", 8],
    "max-nested-callbacks": ["error", 4],
    "max-statements": ["error", 30],
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": ["error", "always"],
    "newline-before-return": "error",
    "newline-per-chained-call": 0,
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": [0, { "allowForLoopAfterthoughts": true }],
    "no-restricted-syntax": 0,
    "no-spaced-func": "error",
    "no-ternary": 0,
    "no-trailing-spaces": "error",
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": ["error", { "defaultAssignment": true }],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "never"],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "operator-assignment": ["error", "always"],
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "quote-props": ["error", "as-needed"],
    "quotes": ["error", "double", "avoid-escape"],
    "require-jsdoc": 0,
    "semi": ["error", "always"],
    "semi-spacing": ["error", {
      "before": false,
      "after": true,
    }],
    "sort-imports": 0,
    "sort-vars": 0,
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "wrap-regex": 0,

    "arrow-body-style": [0, "as-needed"],
    "arrow-parens": 0, // babel/arrow-parens
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "constructor-super": "error",
    "generator-star-spacing": ["error", "after"],
    "no-class-assign": "error",
    "no-confusing-arrow": 0,
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-new-symbol": "error",
    "no-this-before-super": "error",
    "no-useless-constructor": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-reflect": 0,
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "template-curly-spacing": ["error", "never"],
    "yield-star-spacing": ["error", "after"],
  }
};
