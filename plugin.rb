# name: wyl
# about: discourse customizations for wyl
# version: 0.1
# authors: Jacob Chapel

### Large avatars
register_asset "stylesheets/large-avatars.css.scss", :desktop
register_asset "javascripts/discourse/templates/post/poster-avatar.raw.hbs", :desktop

### Large posts
register_asset "stylesheets/large-posts.css.scss", :desktop

### Color modifications
register_asset "stylesheets/colors.css.scss"

# freedom patch YouTube Onebox
class Onebox::Engine::YoutubeOnebox
  include Onebox::Engine

  def to_html
    if video_id
      # Put in the LazyYT div instead of the iframe
      "<div class=\"lazyYT\" data-youtube-id=\"#{video_id}\" data-ratio=\"16:9\" data-parameters=\"#{embed_params}\"></div>"
    else
      super
    end
  end

end
