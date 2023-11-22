var selectedCharacter;
document.getElementById("characterSelector").addEventListener("change", function () {
    selectedCharacter = this.value;
});
export function getSelectedCharacter() {
    return selectedCharacter;
}
