function findTokenValue (token) {
  var tokens = {
    'github': 'https://github.com/markus101/discourse-shortcuts'
  }

  var tokenValue = tokens[token.toLowerCase()];

  if (tokenValue) {
    return tokenValue;
  }

  return null;
}

Discourse.Dialect.inlineBetween({
  start: '((',
  stop: '))',
  rawContents: true,

  emitter: function(token) {
    var tokenValue = findTokenValue(token);

    if (tokenValue) {
      return ['a', {"href": tokenValue}, token];
    }
  }
});
