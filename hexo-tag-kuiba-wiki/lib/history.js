const execSync = require('child_process').execSync;

module.exports = ctx => function (args, content) {
    const note = ctx.extend.tag.env.extensions.note.fn;
    const code = ctx.extend.tag.env.extensions.code.fn;
    let data = execSync(`git log -p --date=short --pretty=format:"/%cn/%ce/%ad/%s/" ${ctx.source_dir + this.source}`).toString();
    data = data.replace(/^\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\/]+)\/\ndiff --git[^@]+(((?!(\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\/]+)\/\ndiff --git[^@]+))[\s\S])*)$/gm, function(match, v1, v2, v3, v4, v5) {
        return note(["success", `[${v1}](mailto:${v2} "${v4}")`, v3], code(["lang:diff"], v5));
    });
    return data;
};
