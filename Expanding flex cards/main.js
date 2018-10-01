var ele = document.querySelectorAll("div.item");
ele.forEach(element => {
    element.addEventListener('click',function (event) {
        console.log("test");
        document.querySelector('div.active').classList.remove('active');
        element.classList.add('active');
    })
});

