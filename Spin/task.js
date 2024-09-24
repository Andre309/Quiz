document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button:not(.circle)"); // Всі кнопки, крім "Spin"
    const spinButton = document.querySelector(".circle");
    let currentIndex = 0; // Починаємо з першої кнопки
    let interval; // Для збереження інтервалу анімації

    // Масив дій
    const actions = ["Погладити", "Ущипнути", "Поцілувати", "Помасажувати", "Обійняти", "Полоскотати"];

    // Масив частин тіла
    const bodyParts = ["руку", "ногу", "голову", "спину", "живіт", "вухо", "лоб", "ніс", "дупу", "ключицю", "пальці"];
    //Масив історій
    const stories = ["Вигадай історію, використовуючи всі слова на букву ", "Опиши себе, використовуючи всі слова на букву ", "Розкажи про свою мрію, використовуючи всі слова на букву ", "Похвали інших учасників, використовуючи всі слова на букву "];
    //Масив букв
    const letters = ["А", "Б", "В", "Г", "Д", "Е", "Є", "Ж", "З", "І", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Я"];
    //Спортивна категорія
    const exercies = ["Присядь ", "Відіжмись від підлоги ", "Пострибай на одній нозі ", "Відіжмись від стіни ", "Покачай прес "];
    //Кількість спроб
    const digitals = ["5 раз", "6 раз", "7 раз", "8 раз", "9 раз", "10 раз", "11 раз", "12 раз", "13 раз", "14 раз", "15 раз"];
    //Повтори звук
    const sounds = ["Повтори будь-який звук, який запропонує твій опонент"];
    //Пропуск ходу
    const step = ["Пропусти хід"];
    //Пародія
    const parody = ["Спародіюй людину, яку знаєте ви обоє"];
    //Не смішно
    const laught = ["Розміши свого опонента за 30 сек. Якщо він не засміявся - ти програв-/ла"];
    //Розкажи анекдот
    const anekdot = ["Розкажи анекдот"];

    // Функція для підсвічування кнопки
    function highlightButton(index) {
        buttons.forEach(button => button.classList.remove("highlight")); // Прибираємо підсвічування
        buttons[index].classList.add("highlight"); // Додаємо підсвічування потрібній кнопці
    }

    // Функція для початку підсвічування по колу
    function startSpinning() {
        currentIndex = 0; // Починаємо з першої кнопки
        interval = setInterval(() => {
            highlightButton(currentIndex);
            currentIndex = (currentIndex + 1) % buttons.length; // Оновлюємо індекс для переходу по колу
        }, 100); // Кожні 100 мілісекунд змінюємо підсвічену кнопку
    }

    // Функція для зупинки підсвічування
    function stopSpinning() {
        clearInterval(interval); // Зупиняємо підсвічування
        const randomIndex = Math.floor(Math.random() * buttons.length); // Випадковий індекс для зупинки
        highlightButton(randomIndex); // Підсвічуємо випадкову кнопку

        // Якщо кнопка, на якій зупинилось підсвічування, це "Пародія"
        if (buttons[randomIndex].textContent === "Пародія") {
            generateTask1(); // Викликаємо функцію для генерації завдання з пародією
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Частини тіла"
        if (buttons[randomIndex].textContent === "Частини тіла") {
            generateTask2(); // Викликаємо функцію для генерації завдання з частинами тіла
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Не смішно"
        if (buttons[randomIndex].textContent === "Не смішно") {
            generateTask3(); // Викликаємо функцію для генерації завдання "Не смішно"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "пропуск ходу"
        if (buttons[randomIndex].textContent === "Пропусти хід") {
            generateTask4(); // Викликаємо функцію для генерації завдання "пропуск ходу"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Буквар"
        if (buttons[randomIndex].textContent === "Буквар") {
            generateTask5(); // Викликаємо функцію для генерації завдання з букварем
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "повтори звук"
        if (buttons[randomIndex].textContent === "Повтори звук") {
            generateTask6(); // Викликаємо функцію для генерації завдання "Повтори звук"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Спортивна категорія"
        if (buttons[randomIndex].textContent === "Спортивна категорія") {
            generateTask7(); // Викликаємо функцію для генерації завдання зі Спортивної категорії
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

        // Якщо кнопка, на якій зупинилось підсвічування, це "Розкажи анекдот"
        if (buttons[randomIndex].textContent === "Анекдот") {
            generateTask8(); // Викликаємо функцію для генерації завдання "Розкажи анекдот"
            changeCategoryColor(buttons[randomIndex]); // Змінюємо колір тексту
        }

    }

    // Функція для зміни кольору тексту категорії
function changeCategoryColor(button) {
    button.style.color = "black"; // Змінюємо колір тексту на чорний
}

    // Функція для генерації завдання з пародіями
    function generateTask1() {
        const randomParody = parody[Math.floor(Math.random() * parody.length)]; // Випадковий вибір звуку
        const taskElement1 = document.getElementById("task1"); // Де виводимо завдання з звуками
        taskElement1.textContent = `${randomParody}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з частинами тіл
    function generateTask2() {
        const randomBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)]; // Випадковий вибір частини тіла
        const randomAction = actions[Math.floor(Math.random() * actions.length)]; // Випадковий вибір дії
        const task2 = `${randomAction} ${randomBodyPart}`; // Створюємо завдання

        // Виведення завдання на екран
        const taskElement2 = document.getElementById("task2");
        taskElement2.textContent = task2;
    }

    // Функція для генерації завдання з відтворенням звуків
    function generateTask3() {
        const randomLaught = laught[Math.floor(Math.random() * laught.length)]; // Випадковий вибір звуку
        const taskElement3 = document.getElementById("task3"); // Де виводимо завдання з звуками
        taskElement3.textContent = `${randomLaught}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з відтворенням звуків
    function generateTask4() {
        const randomStep = step[Math.floor(Math.random() * step.length)]; // Випадковий вибір звуку
        const taskElement4 = document.getElementById("task4"); // Де виводимо завдання з звуками
        taskElement4.textContent = `${randomStep}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання з історіями та буквами
    function generateTask5() {
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        const task5 = `${randomStory} ${randomLetter}`; 

        // Виведення завдання на екран
        const taskElement5 = document.getElementById("task5");
        taskElement5.textContent = task5;
    }

     // Функція для генерації завдання з відтворенням звуків
     function generateTask6() {
        const randomSound = sounds[Math.floor(Math.random() * sounds.length)]; // Випадковий вибір звуку
        const taskElement6 = document.getElementById("task6"); // Де виводимо завдання з звуками
        taskElement6.textContent = `${randomSound}`; // Виведення завдання на екран
    }

    // Функція для генерації завдання зі спортивними вправами
    function generateTask7() {
        const randomExercies = exercies[Math.floor(Math.random() * exercies.length)];
        const randomDigitals = digitals[Math.floor(Math.random() * digitals.length)];
        const task7 = `${randomExercies} ${randomDigitals}`; 

        // Виведення завдання на екран
        const taskElement7 = document.getElementById("task7");
        taskElement7.textContent = task7;
    }

    // Функція для генерації завдання з анекдотом
    function generateTask8() {
        const randomAnekdot = anekdot[Math.floor(Math.random() * anekdot.length)]; // Випадковий вибір звуку
        const taskElement8 = document.getElementById("task8"); // Де виводимо завдання з звуками
        taskElement8.textContent = `${randomAnekdot}`; // Виведення завдання на екран
    }

    // Функція для очищення попередніх завдань
    function clearTasks() {
        const taskElement1 = document.getElementById("task1");
        const taskElement2 = document.getElementById("task2");
        const taskElement3 = document.getElementById("task3");
        const taskElement4 = document.getElementById("task4");
        const taskElement5 = document.getElementById("task5");
        const taskElement6 = document.getElementById("task6");
        const taskElement7 = document.getElementById("task7");
        const taskElement8 = document.getElementById("task8");
        
        taskElement1.textContent = ""; // Очищаємо текст для завдання з пародією
        taskElement2.textContent = ""; // Очищаємо текст для завдання з частинами тіла
        taskElement3.textContent = ""; // Очищаємо текст для завдання розсмішити опонента
        taskElement4.textContent = ""; // Очищаємо текст для завдання з пропуком ходу
        taskElement5.textContent = ""; // Очищаємо текст для завдання зі букварем
        taskElement6.textContent = ""; // Очищаємо текст для завдання зі звуками
        taskElement7.textContent = ""; // Очищаємо текст для завдання зі спортивними вправами
        taskElement8.textContent = ""; // Очищаємо текст для завдання з анекдотом

         // Очищення кольору тексту кнопок
    buttons.forEach(button => {
        button.style.color = ""; // Скидаємо колір тексту на стандартний
    });
    }

    

    // Додаємо подію для кнопки Spin
    spinButton.addEventListener("click", function() {
        clearTasks(); // Очищаємо попередні завдання перед початком нового обертання
        startSpinning(); // Починаємо анімацію підсвічування

        setTimeout(() => {
            stopSpinning(); // Через кілька секунд зупиняємо анімацію
        }, 3000); // Зупиняємо через 3 секунди (3000 мс)
    });
});
