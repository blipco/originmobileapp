'use strict';

module.exports = function(User) {
User.observe('before save', function(ctx, next) {
    //ctx.instance = first post/register
    //ctx.currentInstance = logging in
    if (ctx.instance) {
        ctx.instance.deviceId = '';
        ctx.instance.devices = [];
    }
    else {
        let devices = ctx.currentInstance.devices.length - 1;
        if (devices === -1 || ctx.currentInstance.devices[devices] !== ctx.data.deviceId) {
            ctx.data.devices = [...ctx.currentInstance.devices, ctx.data.deviceId];
    }
}
    next();
    });
};
