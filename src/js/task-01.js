const categoryItemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItemEl.length}`);

const categoryTitle = document.querySelectorAll("h2");
categoryTitle.forEach((el) => {
  console.log("Category:", el.textContent);
  console.log("Elements:", el.nextElementSibling.children.length);
});
