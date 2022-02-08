const program = require('commander');
const models = require('./models/manage');

program
    .version('1.0.0')
    .description('World CUP 2018 Russia');

program
    .command('refresh')
    .alias('r')
    .description('Get newwest data from server')
    .action(() => {
        models.refreshData();
    });

program
    .command('get-stadium')
    .alias('g-s')
    .description('Get stadium')
    .action(() => {
        models.getStadiums();
    });

program
    .command('get-tv-channels')
    .alias('tvs')
    .description('Get tv channels')
    .action(() => {
        models.getTvChannels();
    });

program
    .command('get-teams')
    .alias('teams')
    .description('Get teams')
    .action(() => {
        models.getTeams();
    });

program
    .command('get-group-match')
    .alias('gm')
    .description('Get group match')
    .action(() => {
        models.getGroupsMatch();
    });

program
    .command('get-match-by-group')
    .alias('mbg')
    .description('Get match by group')
    .action(() => {
        var args = process.argv.slice(3);
        models.getMatchByGroupName(args);
    });

program.parse(process.argv);