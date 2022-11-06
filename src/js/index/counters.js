export function counter1() {
  let i = 0,
    students = 600,
    step = students > i ? 1 : 0;
  let counter = setInterval(() => {
    i += step;
    document.querySelectorAll(".index-section3 .number span")[0].textContent =
      i;
    if (i == students) {
      document.querySelectorAll(".index-section3 .number span")[0].textContent =
        students;
      clearInterval(counter);
    }
  }, 5);
}
export function counter2() {
  let i = 0,
    teachers = 40,
    step = teachers > i ? 1 : 0;
  let counter = setInterval(() => {
    i += step;
    document.querySelectorAll(".index-section3 .number span")[1].textContent =
      i;
    if (i == teachers) {
      document.querySelectorAll(".index-section3 .number span")[1].textContent =
        teachers;
      clearInterval(counter);
    }
  }, 100);
}
export function counter3() {
  let i = 0,
    yearsExperience = 20,
    step = yearsExperience > i ? 1 : 0;
  let counter = setInterval(() => {
    i += step;
    document.querySelectorAll(".index-section3 .number span")[2].textContent =
      i;
    if (i == yearsExperience) {
      document.querySelectorAll(".index-section3 .number span")[2].textContent =
        yearsExperience;
      clearInterval(counter);
    }
  }, 200);
}
