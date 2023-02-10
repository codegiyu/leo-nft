module.exports = {
    // globals: {
    //     __PATH_PREFIX__: true,
    // },
    settings: {
        react: {
            version: "detect", // detect react version
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                singleQuote: false,
                semi: true,
                trailingComma: "es5",
                tabWidth: 4,
                endOfLine: "auto",
            },
        ],
        "react/prop-types": 0,
    },
};
