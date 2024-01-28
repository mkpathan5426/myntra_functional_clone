let innerHtml = '';

let bagItems;

onload();
function onload() {
    let bagItemsStr = localStorage.getItem("bagItems");
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagItemCount();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagItemCount();
    localStorage.setItem("bagItems", JSON.stringify(bagItems))
}

function displayBagItemCount() {
    let bagItemsCount = document.querySelector(".add-to-bag-count");
    if (bagItems.length > 0) {
        bagItemsCount.innerText = bagItems.length;
        bagItemsCount.style.visibility = "visible";
    }
    else {
        bagItemsCount.style.visibility = "hidden";
    }
}

function displayItemsOnHomePage() {
let itemsContainerElement = document.querySelector(".items-container");
    if (!itemsContainerElement) {
        return;
    }
    items.forEach(item => {
        innerHtml += `
        <div class="item-container">
        <img src="${item.itemImage}" alt="item-image" class="item-image">
        <div class="rating">${item.rating.stars} <img class="star" src="images/star.svg" alt="star"> | ${item.rating.noOfReviews}</div>
        <div class="company-name">${item.companyName}</div>
        <div class="item-name">${item.itemName}</div>
        <div class="price">
        <span class="current-price">Rs ${item.currentPrice}</span>
        <span class="original-price">${item.originalPrice}</span>
        <span class="discount">(${item.discount}% OFF)</span>
        </div>
        <button class="add-to-bag-btn" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>
        `
    })
    itemsContainerElement.innerHTML = innerHtml;
}

// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality
// problem on 'oclick' functionality