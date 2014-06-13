var npm = require('npm');

/**
 * Created by leiko on 07/03/14.
 */
module.exports = function (filepath, options, callback) {
    if(options instanceof Function){
        callback = options;
        options = null;
    }
    npm.load({logLevel: 'silent'}, function (err) {
        if (err) {
            return callback(err);
        }
        var default_repository = npm.config.get('registry');
        if( options && options.registry ){
             npm.config.set('registry',options.registry);
        }
        npm.commands.publish([filepath], function (err) {
            npm.config.set('registry', default_repository);
            if (err) {
                return callback(err);
            }

            callback();
        });
    });
}