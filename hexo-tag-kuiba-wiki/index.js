hexo.extend.tag.register('double', require('./lib/double')(hexo), {ends: true, async: true});
hexo.extend.tag.register('history', require('./lib/history')(hexo), {async: true});