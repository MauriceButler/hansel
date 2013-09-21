#!/usr/bin/env node

var program = require('commander'),
    packageJson = require('./package.json'),
    hansel;

function list(value) {
    return value.split(',') || [];
}

program._name = packageJson.name;
program
    .version(packageJson.version)
    .option('-u, --uris <uri>', 'Uri(s) to check', list)
    .parse(process.argv);

hansel = require('./hansel');

hansel.getPageRank(program.uris, function(error, pageRank) {
    if(error){
        console.log(error.stack || error);
    }

    console.log(pageRank);
});
