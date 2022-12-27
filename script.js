let cards = document.querySelectorAll(".card")
function cardsAnimation() {
    cards.forEach((card) => {
        let titleElem = card.querySelector("h2")
        let title = titleElem.innerHTML
        let letters = []
        let counter = 0
        let intervalID
        function printTitle () {
            letters.push(title[counter])
            counter++
            titleElem.textContent = letters.join("")
            if(counter > title.length) {
                clearInterval(intervalID)
            }
        }
        intervalID = setInterval(printTitle,300)
    })
}
cardsAnimation()
setInterval(cardsAnimation,7000)