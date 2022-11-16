(() => {
    const tabsCaption = document.querySelectorAll('.tab > div')
    const tabsContent = document.querySelectorAll('.tab-content > div')

    tabsCaption.forEach((tabCaption, index) => {
        tabCaption.addEventListener('click', () => {
            if(window.screen.width < 800) {
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
})

    ()