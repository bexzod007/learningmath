document.addEventListener("DOMContentLoaded", () => {
    // Точный список всех частей для всех 7 уроков
    const courseMap = [
        // Lesson 1 (6 parts)
        "lesson1/part1.html", "lesson1/part2.html", "lesson1/part3.html",
        "lesson1/part4.html", "lesson1/part5.html", "lesson1/part6.html",

        // Lesson 2 (8 parts)
        "lesson2/part1.html", "lesson2/part2.html", "lesson2/part3.html",
        "lesson2/part4.html", "lesson2/part5.html", "lesson2/part6.html",
        "lesson2/part7.html", "lesson2/part8.html",

        // Lesson 3 (9 parts)
        "lesson3/part1.html", "lesson3/part2.html", "lesson3/part3.html",
        "lesson3/part4.html", "lesson3/part5.html", "lesson3/part6.html",
        "lesson3/part7.html", "lesson3/part8.html", "lesson3/part9.html",

        // Lesson 4 (6 parts)
        "lesson4/part1.html", "lesson4/part2.html", "lesson4/part3.html",
        "lesson4/part4.html", "lesson4/part5.html", "lesson4/part6.html",

        // Lesson 5 (6 parts)
        "lesson5/part1.html", "lesson5/part2.html", "lesson5/part3.html",
        "lesson5/part4.html", "lesson5/part5.html", "lesson5/part6.html",

        // Lesson 6 (6 parts)
        "lesson6/part1.html", "lesson6/part2.html", "lesson6/part3.html",
        "lesson6/part4.html", "lesson6/part5.html", "lesson6/part6.html",

        // Lesson 7 (6 parts)
        "lesson7/part1.html", "lesson7/part2.html", "lesson7/part3.html",
        "lesson7/part4.html", "lesson7/part5.html", "lesson7/part6.html"
    ];

    const currentPath = window.location.pathname;
    const currentIndex = courseMap.findIndex(path => currentPath.includes(path));

    // Автоматически создаём кнопки внизу страницы
    const navDiv = document.createElement('div');
    navDiv.className = 'lesson-navigation';
    navDiv.innerHTML = `
        <a id="prev-btn" class="nav-btn">← Previous Part</a>
        <a id="next-btn" class="nav-btn">Next Part →</a>
    `;
    document.body.appendChild(navDiv);

    const basePath = currentPath.substring(0, currentPath.indexOf('lesson'));

    // Настраиваем переходы
    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentIndex !== -1 && currentIndex < courseMap.length - 1) {
            window.location.href = basePath + courseMap[currentIndex + 1];
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentIndex > 0) {
            window.location.href = basePath + courseMap[currentIndex - 1];
        }
    });
});