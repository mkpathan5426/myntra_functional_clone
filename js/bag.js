const CONVENIENCE_FEE = 99;
let bagItemObjects;
onLoad();

function onLoad() {
    loadBagItemObjects();
    displayBagItems();
    displayBagSummary();
};

function displayBagSummary() {
    let bagSummaryElement = document.querySelector(".bag-summary");
    let totalItem = bagItemObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
    
    bagItemObjects.forEach(bagItem => {
        totalMRP += bagItem.originalPrice;
        totalDiscount += bagItem.originalPrice - bagItem.currentPrice;
    })
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;


    bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">${totalMRP}</span>
    </div>
    <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
        </div>
        <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">Rs 99</span>
        </div>
        <hr>
        <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">Rs ${finalPayment}</span>
        </div>
    </div>
    <button class="btn-place-order">
        <div class="css-xjhrni">PLACE ORDER</div>
    </button>
    `
}

function loadBagItemObjects() {
    bagItemObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
        console.log(bagItemObjects);
    })
}

function displayBagItems() {
    let bagItemsContainerElement = document.querySelector(".bag-items-container");
    let innerHTML = "";
    bagItemObjects.forEach(bagItem => {
        innerHTML += generateItemHTML(bagItem);
    });
    bagItemsContainerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagItemCount();
    displayBagItems();
    displayBagSummary();
}

function generateItemHTML(item) {
    return `<div class="bag-item-container">
    <div class="item-left-part">
    <img class="bag-item-img" src="../${item.itemImage}">
    </div>
    <div class="item-right-part">
    <div class="company">${item.companyName}</div>
    <div class="item-name">${item.itemName}</div>
    <div class="price-container">
        <span class="current-price">Rs ${item.currentPrice}</span>
        <span class="original-price">Rs ${item.originalPrice}</span>
        <span class="discount-percentage">(${item.discount}% OFF)</span>
    </div>
    <div class="return-period">
        <span class="return-period-days">${item.returnPeriod} days</span> return available
    </div>
    <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.deliveryDate}</span>
    </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
</div>`;
};