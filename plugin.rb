# name: wyl
# about: discourse customizations for wyl
# version: 1.0
# authors: Jacob Chapel

### Large avatars
register_asset "stylesheets/large-avatars.css.scss", :desktop
register_asset "javascripts/discourse/templates/post/poster-avatar.raw.hbs"
register_asset "javascripts/discourse/templates/mobile/post/poster-avatar.raw.hbs"

### Large posts
register_asset "stylesheets/large-posts.css.scss", :desktop

### Color modifications
register_asset "stylesheets/colors.css.scss"

### Spoiler post toolbar button
register_asset "javascripts/spoiler-toolbar.js", :composer
register_asset "stylesheets/spoiler-toolbar.css.scss"
