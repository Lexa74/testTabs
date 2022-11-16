(() => {
    const tabsCaption = document.querySelectorAll('.tab > div')
    const tabsContent = document.querySelectorAll('.tab-content > div')

    tabsCaption.forEach((tabCaption, index) => {
        tabCaption.addEventListener('click', (event) => {
            removeActiveTabs(tabsCaption)
            removeActiveTabs(tabsContent)
            tabsContent[index].classList.add('active') 
            tabCaption.classList.add('active')
        })
    })




    const removeActiveTabs = (tabs) => {
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        })
    }
})

    ()