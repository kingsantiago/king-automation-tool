module.exports = {

    default: {
        tags: process.env.npm_config_TAGS || "",
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/tests/features/"
        ],
        dryRun: false,
        require: [
            "src/tests/steps/*.ts"
        ],
        requireModule: ["ts-node/register"]
    }
}
