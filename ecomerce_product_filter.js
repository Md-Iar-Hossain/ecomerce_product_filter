/*
    Author: Muhammad iar Hossain
    Date of creation: 13th Septembar 2021
    Used Technology: HTML5, CSS3, Vanilla JS
    compatiable for all major web browser 
    Features: 
      => Fillter product by category
      => Responsive for all device 
*/

const filter_menu = document.querySelector('.filter_menu');
const gallery_image = document.querySelectorAll('.gallery figure.item');
const nav = document.querySelector('nav');
const closeBtn  = document.querySelector('.close_btn');
const imagePreview  = document.querySelector('.image_preview');

filter_menu.onclick = (selected_item) => {
    if(selected_item.target.classList.contains('menu_item')) {
        filter_menu.querySelector('.active').classList.remove('active');
        selected_item.target.classList.add('active');
        let filterItem = selected_item.target.getAttribute('data-filter');

        gallery_image.forEach((image, ind) => {
            const image_item = image.getAttribute('data-filter');
            if((filterItem == "all") || (filterItem == image_item)) {
                image.classList.remove('hide');
                image.classList.add('show');
            } else {
                image.classList.add('hide');
                image.classList.remove('show')
            }
        })
    }
}
gallery_image.forEach(image => {
    image.setAttribute('onclick', 'preview(this)');
})
window.onscroll = ()=> {
    nav.classList.toggle('sticky', (window.scrollY && window.pageYOffset) > 0)
}

function preview(element) {
    const img = document.querySelector('.image_box img');
    const previewImage = element.querySelector('img').src;
    const filterCategory = element.getAttribute('data-filter');
    const shadow = document.querySelector('.shadow');
    const category = document.querySelector('.category');
    category.textContent = filterCategory;
    img.src = previewImage
    imagePreview.classList.add('active');
    shadow.classList.add('popUp');
    document.body.style.overflow = 'hidden';
    closeBtn.onclick = ()=> {
        imagePreview.classList.remove('active');
        shadow.classList.remove('popUp');
        document.body.style.overflow = 'auto';
    }
}