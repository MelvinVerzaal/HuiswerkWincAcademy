
show();

const filters = document.getElementsByName("filter");
filters.forEach(item =>
    item.addEventListener("click", filterClicked)
);

document.addEventListener('keypress', logKey);