const cli = require("yargs");

const args = cli
    .help()
    .detectLocale(false)
    .command("example", "This command isn't showed when showHelp happens in `*` command below", yargs => {
        yargs.option("ex", {
            describe: "This option isn't showed when showHelp happens in `*` command below",
            default: 5000
        });

        yargs.command("subexample", "subexample");
    }, args => {
        // This showHelp does show options and subcommands of `example` command
        //
        // You can test it doing: node index.js example
        cli.showHelp();
    })
    .command({
        command: "*",
        handler: args => {
            // This showHelp does not show anything,
            // no commands (ex, example), no options
            //
            // You can test it doing: node index.js no-example
            cli.showHelp();
        }
    })
    .argv;
