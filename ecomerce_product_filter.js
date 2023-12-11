/*
    Author: Muhammad iar Hossain
    Date of creation: 13th Septembar 2021
    Used Technology: HTML5, CSS3, Vanilla JS
    compatiable for all major web browser 
    Features: 
      => Fillter product by category
      => Responsive for all device 
*/

const nav = document.querySelector('nav');
const filterMenu = document.querySelector('.filter_menu');
const galleryImage = document.querySelectorAll('.gallery figure.item');
const closeBtn  = document.querySelector('.close_btn');
const imagePreview  = document.querySelector('.image_preview');
const img = document.querySelector('.image_box img');
const shadow = document.querySelector('.shadow');
const category = document.querySelector('.category');

filterMenu.onclick = (selected_item) => {
    if(selected_item.target.classList.contains('menu_item')) {
        filterMenu.querySelector('.active').classList.remove('active');
        selected_item.target.classList.add('active');
        let filterItem = selected_item.target.getAttribute('data-filter');
        console.log(filterItem)
        galleryImage.forEach((image) => {
            const imageItem = image.getAttribute('data-filter');
            if((filterItem == "all") || (filterItem == imageItem)) {
                image.classList.remove('hide');
                image.classList.add('show');
            } else {
                image.classList.add('hide');
                image.classList.remove('show')
            }
        })
    }
}
galleryImage.forEach(image => {
    image.setAttribute('onclick', 'preview(this)');
})
window.onscroll = ()=> {
    nav.classList.toggle('sticky', (window.scrollY > 0))
}

function preview(element) {
    const previewImage = element.querySelector('img').src;
    const filterCategory = element.getAttribute('data-filter');
    category.textContent = filterCategory;
    img.src = previewImage
    imagePreview.classList.add('active');
    shadow.classList.add('popUp');
    document.body.style.overflow = 'hidden';
}
closeBtn.onclick = ()=> {
    imagePreview.classList.remove('active');
    shadow.classList.remove('popUp');
    document.body.style.overflow = 'auto';
}