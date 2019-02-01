export default {
  name: 'large-avatars',

  initialize: function (container) {
    var PosterAvatarComponent = container.factoryFor('component:poster-avatar');

    var isMobile = Discourse.Mobile.isMobileDevice;

    var size = isMobile ? 'large' : 'huge';

    PosterAvatarComponent.reopen({
      render: function(buffer) {
        var avatar = Handlebars.helpers.avatar(this.get('post'), {hash: {imageSize: size}});
        buffer.push(avatar);
      }
    });
  }
};
