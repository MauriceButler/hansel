var async = require('async'),
    PageRank = require('pagerank');

function getPageRank(uris, callback){
    if(!callback){
        callback = function(error, results){
            console.log(error.stack || error || results);
        };
    }

    if(!uris){
        callback(new Error('No Uri(s) provided.'));
    }

    if(typeof uris === 'string'){
        uris = [uris];
    }

    async.map(
        uris,
        function(uri, callback){
            new PageRank(uri, function(error, pageRank) {
                if(error){
                    return callback(error);
                }

                callback(null, {uri: uri, pageRank: pageRank || 0});
            });
        },
        callback);
}

module.exports = {
    getPageRank: getPageRank
};



