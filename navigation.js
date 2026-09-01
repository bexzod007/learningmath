document.addEventListener("DOMContentLoaded", () => {
  const courseMap = [
    // Lesson 1
    "lesson1/part1.html", "lesson1/part2.html", "lesson1/part3.html", "lesson1/part4.html", "lesson1/part5.html", "lesson1/part6.html",
    // Lesson 2
    "lesson2/part1.html", "lesson2/part2.html", "lesson2/part3.html", "lesson2/part4.html", "lesson2/part5.html", "lesson2/part6.html", "lesson2/part7.html", "lesson2/part8.html",
    // Lesson 3
    "lesson3/part1.html", "lesson3/part2.html", "lesson3/part3.html", "lesson3/part4.html", "lesson3/part5.html", "lesson3/part6.html", "lesson3/part7.html", "lesson3/part8.html", "lesson3/part9.html",
    // Lesson 4
    "lesson4/part1.html", "lesson4/part2.html", "lesson4/part3.html", "lesson4/part4.html", "lesson4/part5.html", "lesson4/part6.html",
    // Lesson 5
    "lesson5/part1.html", "lesson5/part2.html", "lesson5/part3.html", "lesson5/part4.html", "lesson5/part5.html", "lesson5/part6.html",
    // Lesson 6
    "lesson6/part1.html", "lesson6/part2.html", "lesson6/part3.html", "lesson6/part4.html", "lesson6/part5.html", "lesson6/part6.html",
    // Lesson 7
    "lesson7/part1.html", "lesson7/part2.html", "lesson7/part3.html", "lesson7/part4.html", "lesson7/part5.html", "lesson7/part6.html"
    // lesson 8
    "lesson8/part1.html", "lesson8/part2.html", "lesson8/part3.html", "lesson8/part4.html", "lesson8/part5.html", "lesson8/part6.html", "lesson8/part7.html"
  ];

  // Создаем контейнер кнопок, если его нет в HTML
  let navContainer = document.querySelector('.lesson-navigation');
  if (!navContainer) {
    navContainer = document.createElement('div');
    navContainer.className = 'lesson-navigation';
    navContainer.innerHTML = `
      <a id="prev-btn" class="nav-btn">← Previous Part</a>
      <a id="next-btn" class="nav-btn">Next Part →</a>
    `;
    document.body.appendChild(navContainer);
  }

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!prevBtn || !nextBtn) return;

  const currentPath = window.location.pathname;
  const currentIndex = courseMap.findIndex(path => currentPath.includes(path));

  if (currentIndex !== -1) {
    if (currentIndex > 0) {
      prevBtn.href = "/learningmath/" + courseMap[currentIndex - 1];
    } else {
      prevBtn.classList.add('disabled');
      prevBtn.removeAttribute('href');
    }

    if (currentIndex < courseMap.length - 1) {
      nextBtn.href = "/learningmath/" + courseMap[currentIndex + 1];
    } else {
      nextBtn.classList.add('disabled');
      nextBtn.removeAttribute('href');
    }
  }
});