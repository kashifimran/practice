import getComp from 'setjs/template/component.js';

export default {
  templates: ['site/test'],
  preload: function(opts) {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      opts.success(json);
    });
  },
  comp: function(opts, posts) {
    return getComp('site/test', {posts});
  }
};
