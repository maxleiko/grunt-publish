var npm = require('npm');

/**
 * Created by leiko on 07/03/14.
 */
module.exports = function (filepath, callback) {
    npm.load({logLevel: 'silent'}, function (err) {
        if (err) {
            return callback(err);
        }

        npm.commands.publish([filepath], function (err) {
            if (err) {
                return callback(err);
            }

            callback();
        });
    });
}