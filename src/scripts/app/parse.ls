define ['parse', './class/article'], (_parse_, Article) ->
  Parse.initialize App.parse.appId, App.parse.jsKey
  return {}
