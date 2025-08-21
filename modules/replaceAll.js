export function replaceAllTags(varchar) {
    return varchar.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
