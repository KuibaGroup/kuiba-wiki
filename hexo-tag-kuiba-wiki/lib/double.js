module.exports = ctx => function (args, content) {
    return ctx.extend.tag.render(`{% ${content} %}`, ctx);
};