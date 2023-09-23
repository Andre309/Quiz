const design = document.getElementById('btn-football');
const music = document.getElementById('btn-music');
const film = document.getElementById('btn-film');
const literatura = document.getElementById('btn-literatura');

const question2 = document.getElementById('question2');
const design2 = document.getElementById('btn-26june');
const music2 = document.getElementById('btn-27june');
const film2 = document.getElementById('btn-28june');
const literatura2 = document.getElementById('btn-24august');
const container = document.getElementById('btn-container');
const container2 = document.getElementById('btn-container2');

const question3 = document.getElementById('question3');
const design3 = document.getElementById('btn-usa1');
const music3 = document.getElementById('btn-usa2');
const film3 = document.getElementById('btn-usa3');
const literatura3 = document.getElementById('btn-usa4');
const container3 = document.getElementById('btn-container3');

const question4 = document.getElementById('question4');
const design4 = document.getElementById('btn-torshavn');
const music4 = document.getElementById('btn-stockholm');
const film4 = document.getElementById('btn-oslo');
const literatura4 = document.getElementById('btn-kopengagen');
const container4 = document.getElementById('btn-container4');

const question5 = document.getElementById('question5');
const design5 = document.getElementById('btn-zsu');
const music5 = document.getElementById('btn-donaty');
const film5 = document.getElementById('btn-volontery');
const literatura5 = document.getElementById('btn-all-answers');
const container5 = document.getElementById('btn-container5');

const question6 = document.getElementById('question6');
const gratitude = document.getElementById('btn-gratitude');

/*Клік на перше питання*/

design.addEventListener('click', function() {
    setTimeout(function() {
        design.style.backgroundColor = "green";
    }, 300);
    setTimeout(function() {
    container2.style.display = 'block';
    design2.style.display = 'block';
    music2.style.display = 'block';
    film2.style.display = 'block';
    literatura2.style.display = 'block';
    question2.style.display = 'block';
    container.style.display = 'none';
    }, 1000);
});

music.addEventListener('click', function() {
    setTimeout(function() {
        music.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container2.style.display = 'block';
        design2.style.display = 'block';
        music2.style.display = 'block';
        film2.style.display = 'block';
        literatura2.style.display = 'block';
        question2.style.display = 'block';
        container.style.display = 'none';
        }, 1000);
});

film.addEventListener('click', function() {
    setTimeout(function() {
        film.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container2.style.display = 'block';
        design2.style.display = 'block';
        music2.style.display = 'block';
        film2.style.display = 'block';
        literatura2.style.display = 'block';
        question2.style.display = 'block';
        container.style.display = 'none';
        }, 1000);
});

literatura.addEventListener('click', function() {
    setTimeout(function() {
        literatura.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container2.style.display = 'block';
        design2.style.display = 'block';
        music2.style.display = 'block';
        film2.style.display = 'block';
        literatura2.style.display = 'block';
        question2.style.display = 'block';
        container.style.display = 'none';
        }, 1000);
});

/*Клік на друге питання*/

design2.addEventListener('click', function() {
    setTimeout(function() {
        design2.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    container3.style.display = 'block';
    design3.style.display = 'block';
    music3.style.display = 'block';
    film3.style.display = 'block';
    literatura3.style.display = 'block';
    question3.style.display = 'block';
    container2.style.display = 'none';
    }, 1000);
});

music2.addEventListener('click', function() {
    setTimeout(function() {
        music2.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container3.style.display = 'block';
        design3.style.display = 'block';
        music3.style.display = 'block';
        film3.style.display = 'block';
        literatura3.style.display = 'block';
        question3.style.display = 'block';
        container2.style.display = 'none';
        }, 1000);
});

film2.addEventListener('click', function() {
    setTimeout(function() {
        film2.style.backgroundColor = "green";
    }, 300);
    setTimeout(function() {
        container3.style.display = 'block';
        design3.style.display = 'block';
        music3.style.display = 'block';
        film3.style.display = 'block';
        literatura3.style.display = 'block';
        question3.style.display = 'block';
        container2.style.display = 'none';
        }, 1000);
});

literatura2.addEventListener('click', function() {
    setTimeout(function() {
        literatura2.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container3.style.display = 'block';
        design3.style.display = 'block';
        music3.style.display = 'block';
        film3.style.display = 'block';
        literatura3.style.display = 'block';
        question3.style.display = 'block';
        container2.style.display = 'none';
        }, 1000);
});

/*Клік на третє питання*/

design3.addEventListener('click', function() {
    setTimeout(function() {
        design3.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    container4.style.display = 'block';
    design4.style.display = 'block';
    music4.style.display = 'block';
    film4.style.display = 'block';
    literatura4.style.display = 'block';
    question4.style.display = 'block';
    container3.style.display = 'none';
    }, 1000);
});

music3.addEventListener('click', function() {
    setTimeout(function() {
        music3.style.backgroundColor = "green";
    }, 300);
    setTimeout(function() {
    container4.style.display = 'block';
    design4.style.display = 'block';
    music4.style.display = 'block';
    film4.style.display = 'block';
    literatura4.style.display = 'block';
    question4.style.display = 'block';
    container3.style.display = 'none';
        }, 1000);
});

film3.addEventListener('click', function() {
    setTimeout(function() {
        film3.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container4.style.display = 'block';
        design4.style.display = 'block';
        music4.style.display = 'block';
        film4.style.display = 'block';
        literatura4.style.display = 'block';
        question4.style.display = 'block';
        container3.style.display = 'none';
        }, 1000);
});

literatura3.addEventListener('click', function() {
    setTimeout(function() {
        literatura3.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container4.style.display = 'block';
        design4.style.display = 'block';
        music4.style.display = 'block';
        film4.style.display = 'block';
        literatura4.style.display = 'block';
        question4.style.display = 'block';
        container3.style.display = 'none';
        }, 1000);
});

/*Клік на 4 питання*/

design4.addEventListener('click', function() {
    setTimeout(function() {
        design4.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    container5.style.display = 'block';
    design5.style.display = 'block';
    music5.style.display = 'block';
    film5.style.display = 'block';
    literatura5.style.display = 'block';
    question5.style.display = 'block';
    container4.style.display = 'none';
    }, 1000);
});

music4.addEventListener('click', function() {
    setTimeout(function() {
        music4.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    container5.style.display = 'block';
    design5.style.display = 'block';
    music5.style.display = 'block';
    film5.style.display = 'block';
    literatura5.style.display = 'block';
    question5.style.display = 'block';
    container4.style.display = 'none';
        }, 1000);
});

film4.addEventListener('click', function() {
    setTimeout(function() {
        film4.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        container5.style.display = 'block';
        design5.style.display = 'block';
        music5.style.display = 'block';
        film5.style.display = 'block';
        literatura5.style.display = 'block';
        question5.style.display = 'block';
        container4.style.display = 'none';
        }, 1000);
});

literatura4.addEventListener('click', function() {
    setTimeout(function() {
        literatura4.style.backgroundColor = "green";
    }, 300);
    setTimeout(function() {
        container5.style.display = 'block';
        design5.style.display = 'block';
        music5.style.display = 'block';
        film5.style.display = 'block';
        literatura5.style.display = 'block';
        question5.style.display = 'block';
        container4.style.display = 'none';
        }, 1000);
});

/*Клік на 5 питання*/

design5.addEventListener('click', function() {
    setTimeout(function() {
        design5.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    gratitude.style.display = 'block';
    question6.style.display = 'block';
    container5.style.display = 'none';
    }, 1000);
});

music5.addEventListener('click', function() {
    setTimeout(function() {
        music5.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
    gratitude.style.display = 'block';
    question6.style.display = 'block';
    container5.style.display = 'none';
        }, 1000);
});

film5.addEventListener('click', function() {
    setTimeout(function() {
        film5.style.backgroundColor = "red";
    }, 300);
    setTimeout(function() {
        gratitude.style.display = 'block';
        question6.style.display = 'block';
        container5.style.display = 'none';
        }, 1000);
});

literatura5.addEventListener('click', function() {
    setTimeout(function() {
        literatura5.style.backgroundColor = "green";
    }, 300);
    setTimeout(function() {
        gratitude.style.display = 'block';
        question6.style.display = 'block';
        container5.style.display = 'none';
        }, 1000);
});