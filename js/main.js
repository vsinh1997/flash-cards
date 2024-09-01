
function reset() {
    document.getElementById("loader-container").style.display = 'grid'
    setTimeout(() => {
        window.location.reload();
    }, 500);

}

let usedIndexes = [];

function getRandomIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * flashcards.length);
    } while (usedIndexes.includes(index));
    return index;
}

function updateFlashcard() {
    const flashcard = flashcard[currentCardIndex];
    document.getElementById('kanji').textContent = flashcard.kanji;
    document.getElementById('meaning').textContent = flashcard.meaning;
    document.getElementById('furigana').textContent = flashcard.furigana;
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


// setTimeout(document.getElementById("loader-container").display = "grid", 5000)
// document.getElementById("loader-container").style.display = "grid !important"


// window.location.reload();



// Khởi tạo flashcard đầu tiên
updateFlashcard();
