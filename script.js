function toggleCheckboxes(clickedCheckbox) {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        if (checkbox !== clickedCheckbox) {
            checkbox.checked = false;
        }
    });
}

const controls1 = document.querySelectorAll(".control1");
let currentItem1 = 0;
const items1 = document.querySelectorAll(".item1");
const maxItems1 = items1.length;

let nome = document.querySelector('.gallery1');

controls1.forEach((control1) => {
  control1.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left1");

    if (isLeft) {
      currentItem1 -= 1;
    } else {
      currentItem1 += 1;
    }

    if (currentItem1 + 1 >= maxItems1) {
      currentItem1 = 0;
    }

    if (currentItem1 < 0) {
      currentItem1 = maxItems1 - 1;
    }

    items1.forEach((item) => item.classList.remove("current-item1"));

    items1[currentItem1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items1[currentItem1].classList.add("current-item1");
  });
});
