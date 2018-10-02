var ele = document.querySelectorAll("div.item");
ele.forEach(element => {
    element.addEventListener('click',function (event) {
        document.querySelector('div.active').classList.remove('active');
        element.classList.add('active');
    })
});

