var LargePosterAvatar = Discourse.PosterAvatarComponent.extend({
  render: function(buffer) {
    var avatar = Handlebars.helpers.avatar(this.get('post'), {hash: {imageSize: 'huge'}});
    buffer.push(avatar);
  }
});

Discourse.PosterAvatarComponent = LargePosterAvatar;
