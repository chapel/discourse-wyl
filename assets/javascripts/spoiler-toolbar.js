var startTag = '[spoiler]';
var endTag = '[/spoiler]';

var startRe = /\[spoiler\]$/;
var endRe = /^\[\/spoiler\]/;

function toggleSpoiler(chunk) {

  chunk.trimWhiteSpace(true);

  var tagBefore = startRe.exec(chunk.before);
  var tagAfter = endRe.exec(chunk.after);

  if (tagBefore || tagAfter) {
    chunk.before = chunk.before.replace(startRe, '');
    chunk.after = chunk.after.replace(endRe, '');
  } else {
    chunk.startTag = startTag;
    chunk.endTag = endTag;

    if (!chunk.selection) {
      chunk.selection = 'Put hidden content here';
    }
  }
  return;
}

window.PagedownCustom.appendButtons.push({
  id: 'wmd-spoiler-button',
  description: 'Spoiler [spoiler][/spoiler] CTRL+S',
  execute: toggleSpoiler,
  shortcut: 's'
});
