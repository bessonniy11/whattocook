let Specialities = [
    {
        name: 'Пюре',
        recipe: '1.5 кг картошки, молоко',
        src: './img/pure.png',
    },
    {
        name: 'Окрошка',
        recipe: ("0.5 кг картошки,<br />2 л кефира,<br />редиска,<br />яйца,<br />зелень,<br />минералка"),
        src: './img/ok.png',
    },
    {
        name: 'Ёбанное ничего',
        recipe: '',
        src: ''
    },
];


    let Sl = Specialities.length;
    let Result;
    let Inp = document.getElementById('input');
    let Recipe = document.getElementById('recipe')
    let Img = document.getElementById('img')
    let Navlink = document.getElementById('textnav')
    let Nav = document.getElementById('navlink')
    let NavlinkWindow = document.getElementById('skills')
    let Add = document.getElementById('add')    
    let addWindow = document.getElementById('addWindow')
    let fonAdd = document.getElementById('fonAdd')
    let catArea = document.getElementById('catArea')
    let Cat = document.getElementById('cat')
    let wrapper = document.getElementById('wrapper')
    let endgame = document.getElementById('endgame')
    let content = document.getElementById('content')
    let Vine = document.getElementById('vine')



    function Fresh() {
        if (Inp.value == '') {
            Result = Specialities[Math.floor(Math.random()*Sl)];
            Inp.value = Result.name;
            Img.src = Result.src;
            Img.style.display = 'block'
            // Img.classList.add('animate__bounceInLeft');
            Inp.classList.add('animate__heartBeat');
            Inp.style.display = "block";


        } else {
            Inp.value = '';
            Inp.classList.add('animate__heartBeat');
            Inp.style.display = "none"
            Img.style.display = 'none'
            Recipe.style.display = "none"
        }
    }

    Inp.onclick = function () {
        if (Recipe.style.display == "none") {
            Recipe.innerHTML = Result.recipe
            Recipe.style.display = "block"
            Recipe.classList.add('animate__heartBeat');
        } else {
            Recipe.innerHTML = Result.recipe
            Recipe.style.display = "none"
        }
    }
    Recipe.onclick = function () {
        Recipe.innerHTML = Result.recipe
        Recipe.style.display = "none"
    }

    let SpecialitiesArray = Specialities.map(n => `<div>${n.name}</div>`)
    Navlink.innerHTML = SpecialitiesArray

    NavlinkWindow.onclick = function () {
        if (Nav.style.display == "none") {
            Nav.style.display = "block";
            Nav.classList.add('animate__bounceInLeft');
        } else {
            Nav.style.display = "none";
        }
    }

    Add.onclick = function () {
        addWindow.style.display = "block";
        fonAdd.style.display = "block";
    }
    fonAdd.onclick = function () {
        addWindow.style.display = "none";
        fonAdd.style.display = "none";
    }

    catArea.onmouseover = function () {
        if (Cat.style.display == "none") {
            Cat.style.display = "block";
            Cat.classList.add('animate__fadeInUp');
        } else {
            Cat.classList.add('animate__bounceOutDown');
            Cat.style.display = "none";
        }
    }

    Cat.onclick = function () {
        if (wrapper.style.display == "none") {
            wrapper.style.display = "block";
            wrapper.classList.add('animate__fadeInUp');
        } else {
            wrapper.classList.add('animate__bounceOutDown');
            setTimeout(wrapper.style.display = "none", 10000)
        }
    }
    endgame.onclick = function () {
        wrapper.classList.add('animate__bounceOutDown');
        setTimeout(wrapper.style.display = "none", 10000);
    }
    // Vine.onclick = function () {
    //     if (vine.style.display == "block") {
    //         vine.style.display = "none";
    //     } else {
    //         vine.classList.add('animate__bounceOutDown');
    //         vine.style.display = "block";
    // }


