let en = ["ни", "буль", "коль", "то", "ро", "паль", "ми", "ма"];
function getDogName() {
    const syllables = prompt("Input the number of syllables");
    let dogName = "";
    for (let i = 0; i < syllables; i++) {
        let rand = Math.floor(Math.random() * en.length);
        dogName += en[rand];
    }
    alert(dogName);
}