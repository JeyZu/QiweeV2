ServiceConfiguration.configurations.remove({
  service: "twitch"
});
ServiceConfiguration.configurations.insert({
  service: "twitch",
  clientId: "9oieur5tldglr2y6d3mr118zf8i6mw",
  redirectUri: Meteor.absoluteUrl() + '_oauth/twitch?close',
  secret: "blzv9x7lb1qxztyr5v49gaebeiz0kf"
});