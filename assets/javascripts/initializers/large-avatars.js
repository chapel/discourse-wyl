export default {
  name: 'large-avatars',

  initialize: function (container) {
    var PosterAvatarComponent = container.lookupFactory('component:poster-avatar');

    PosterAvatarComponent.reopen({
      render: function(buffer) {
        var avatar = Handlebars.helpers.avatar(this.get('post'), {hash: {imageSize: 'huge'}});
        buffer.push(avatar);
      }
    });
  }
};
