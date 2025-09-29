export function replaceAllTags(string) {
    return string.replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('QUOTE_BEGIN', '<div class="quote">').replaceAll('QUOTE_END', '</div><br /><br />');
}
