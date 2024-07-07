let usedIndexes = [];

function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * flashcards.length);
    } while (usedIndexes.includes(index));
    return index;
}

function updateFlashcard() {
    const flashcard = flashcards[currentCardIndex];
    document.getElementById('kanji').textContent = flashcard.kanji;
    document.getElementById('meaning').textContent = flashcard.meaning;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}


function prevCard() {
    if (usedIndexes.length > 1) {
        usedIndexes.pop();
        currentCardIndex = usedIndexes[usedIndexes.length - 1];
        updateFlashcard();
    }
}

function nextCard() {
    if (usedIndexes.length === flashcards.length) {
        alert("おめでとうございます！すべての問題が解決されました。");
        return;
    }
    currentCardIndex = getRandomIndex();
    usedIndexes.push(currentCardIndex);
    updateFlashcard();
}

// Custom dùng phím mũi tên và phím Enter
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            nextCard();
            break;
        case "ArrowLeft":
            prevCard();
            break;
        case "Enter":
            flipCard()
            break;
        default:
            break;
    }
})


let currentCardIndex = getRandomIndex();
usedIndexes.push(currentCardIndex);

// Khởi tạo flashcard đầu tiên
updateFlashcard();
