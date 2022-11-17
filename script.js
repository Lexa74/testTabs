(() => {
    const tabsCaption = document.querySelectorAll('.tab > div')
    const tabsContent = document.querySelectorAll('.tab-content > div')


    tabsCaption.forEach((tabCaption, index) => {
        tabCaption.addEventListener('click', () => {
            validInput(index)
            if (window.screen.width < 800) {
                tabsContent[index].classList.toggle('active')
                tabCaption.classList.toggle('active')
            } else {
                removeActiveTabs(tabsCaption)
                removeActiveTabs(tabsContent)
                tabsContent[index].classList.add('active')
                tabCaption.classList.add('active')
            }
        })
    })

    const removeActiveTabs = (tabs) => {
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
    }
    const validInput = (id) => {
        const inputAddChar = tabsContent[id].querySelector('.add-charac__input')
        tabsContent[id].querySelector('.add-charac__btn').addEventListener('click', () => {
            if (!inputAddChar.value || inputAddChar.value === ' ') {
                inputAddChar.classList.add('error')
            } else {
                inputAddChar.classList.remove('error')
            }
        })
    }
    validInput(0)
})

    ()