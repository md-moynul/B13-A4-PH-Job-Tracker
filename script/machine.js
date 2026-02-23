function removeColor(selector) {
    selector.classList.remove('bg-primary', 'text-base-100');
}
function addColor(selector) {
    selector.classList.add('bg-base-100', 'text-black/50');
}
function addHidden(selector) {
    selector.classList.add('hidden');
}
function removeHidden(selector){
   selector.classList.remove('hidden');
}