const liContactItem = document.getElementsByClassName('contact-item');
const liContactItemArray = Array.from(liContactItem); // convert it to array to allow indexing and other array functions
const ulContactList = document.getElementsByClassName('contact-list')[0];
let currentPage = 0; // start from first page
const ITEMS_PER_PAGE = 10; // number of contacts to be displayed on a page
let pageNumbers = Math.ceil(liContactItem.length / ITEMS_PER_PAGE);

/**
 * At first, none of the divs show anything. 
 * Then based on which page we are at, we show items 
 */

for (let i = 10; i < liContactItem.length; i++) {
    liContactItem[i].style.display = "none"; // remove any display
}

// showPageNumbers shows page numbers at the bottom of the page 
function showPageNumbers() {
    let divPagination = document.createElement('div');
    divPagination.className = "pagination";

    let divPage = document.getElementsByClassName('page')[0];
    divPage.appendChild(divPagination);

    let ulPages = document.createElement('ul');

    for (let i = 1; i <= pageNumbers; i++) {
        let liPageNumber = document.createElement('li');
        liPageNumber.innerHTML = `<a>${i}</a>`
        liPageNumber.className = "page-number";
        // Add an event listener to each page. It should point to the function that displays content
        liPageNumber.addEventListener('click', function(event) {
            showItems(event);
        });
        ulPages.appendChild(liPageNumber);
    }

    divPagination.appendChild(ulPages);
}

function showItems(el=2) {

    // currentPage -= 1;
    
    let currentPage = el.target.textContent-1;

    let start = ITEMS_PER_PAGE * currentPage;
    let end = start + ITEMS_PER_PAGE;
    console.log(start);
    console.log(end);

    let liShowOnPage = liContactItemArray.slice(start, end); 

    for (let i = 0; i < liShowOnPage.length; i++) {
        liShowOnPage[i].style.display = "block";
        // ulContactList.appendChild(liShowOnPage[i]);
    }
}

showPageNumbers();

