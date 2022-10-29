const image_divs = document.querySelectorAll('.image-gallery-container div')
image_divs.forEach(image_div => {
    image_div.addEventListener('click', ()=>{
        removeActiveClass()
        image_div.classList.add('active')
    })
})

function removeActiveClass() {
    image_divs.forEach(image_div => {
        image_div.classList.remove('active')
    })
}

const paragraph = document.querySelector('.mid-paragraph-p')
if (paragraph) {
    paragraph.addEventListener('click', ()=> {
        console.log('font-family', paragraph.style.fontfamily)
        if (paragraph.style.fontfamily) {
            if (paragraph.style.fontfamily !== 'initial') {
                paragraph.style.fontfamily = 'initial'
            }else {
                paragraph.style.fontfamily = paragraph.style.getPropertyValue('--main-root-font')
            }
        }else {
            paragraph.style.fontfamily = 'initial'
        }
    })
}