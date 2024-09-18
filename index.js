//import { ProductData } from './jason.js';
import { retrieveData } from './firebase.js'
//import { ProductDataID } from './ProductDataBAse2ID.js';
let ProductDataID = 0
async function main() {
    try {
        let givenData = await retrieveData();

        // Process the product data outside of the callback
        processProductData(givenData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
main();
function processProductData(data) {
    ProductDataID = data
    renderProdcuts(data)

    console.log(ProductDataID)
}

const userName = 'admin'
const password = 'admin'

const loginModal = document.getElementById('loginModal')

let firstTabElement = true;

function renderProdcuts(data) {
    let tabsContainer = document.getElementById('tab-container')
    let tabsElement = document.getElementById('tabs');

    let ProductDatasID = data
    let tabsNames = Object.keys(ProductDatasID);
    tabsNames.forEach(tabName => {
        // Create and append tab button
        let tabButton = document.createElement('button');
        tabButton.className = `tab-link ${firstTabElement ? 'active' : ''}`;
        tabButton.textContent = tabName;
        tabButton.onclick = (event) => openTab(event, tabName);

        tabsElement.appendChild(tabButton);

        // Create and append tab content container
        let tabContent = document.createElement('div');
        tabContent.id = tabName;
        tabContent.className = `tab-content ${firstTabElement ? 'active' : ''}`;

        // Create and append products
        let productsContainer = document.createElement('div');
        productsContainer.className = 'products';

        ProductDatasID[tabName].forEach(productDetails => {
            let productDiv = document.createElement('div');



            let anchor = document.createElement('a');
            let h1 = document.createElement('h1');
            let img = document.createElement('img');
            let div = document.createElement('div');
            let h3 = document.createElement('h3');

            productDiv.className = 'product';
            productDiv.id = productDetails.id;

            div.className = productDetails.PerBox ? 'ProductNames' : '';
            img.src = productDetails.imgSrc;
            img.alt = productDetails.imgAlt;


            h1.textContent = productDetails.name;
            h3.textContent = productDetails.PerBox ? productDetails.PerBox : ''


            div.appendChild(h1);
            div.appendChild(h3);

            anchor.appendChild(img);
            anchor.appendChild(div);

            productDiv.appendChild(anchor);
            productsContainer.appendChild(productDiv);
        });

        tabContent.appendChild(productsContainer);
        tabsContainer.appendChild(tabContent);

        firstTabElement = false;
    });
    console.log('is this working')
    addFuntionalityToProducts()
}

function openTab(event, tabName) {
    console.log('hello')

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    console.log(event.currentTarget.classList, tabName)

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    console.log(document.getElementById(tabName).classList)
    event.currentTarget.classList.add('active');

    activeTab = tabName
}



// Get the modal

let activeTab = '1&1'

let modal = document.getElementById("orderModal");
let productDetailsModal = document.getElementById('productAmountDetail')

let orderAddredDot = document.getElementById('redDot')


const closeTypeOptions = document.getElementById('closeTypeOptions')
const closeUserInfo = document.getElementById('closeUserInfo')


let btn = document.getElementById("openOrderBtn");
let btn2 = document.getElementById("openOrderBtn2");

let span = document.getElementsByClassName("close")[0];

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));

}
function getToLocalStorage(key) {
    let localStorageOrderGotten = localStorage.getItem(key);
    if (localStorageOrderGotten) {
        try {
            let orderInfoArrGotten = JSON.parse(localStorageOrderGotten);

            console.log(orderInfoArrGotten);
            return orderInfoArrGotten

        }
        catch (e) {
            console.error("Error parsing JSON:", e);
            return []; // Return an empty array if parsing fails

        }
    }
    else {
        return []; // Return an empty array if no data exists
    }

}

let temporaryData = {}
let localStorageOrder = getToLocalStorage('order')
let orderInfoArr = localStorageOrder ? localStorageOrder : []
let userInfo = {}


if (orderInfoArr) displayOrderSummary()

function stopScrolliing() {
    document.body.style.overflow = 'hidden';
}
function startScrolliing() {
    document.body.style.overflow = '';
}

function addFuntionalityToProducts() {
    console.log('cardFunc')
    let productArrClass = document.querySelectorAll('.product')
    productArrClass.forEach(productDiv => productDiv.addEventListener('click', (event) => {


        event.preventDefault();
        stopScrolliing()
        const productElement = event.currentTarget.closest('.product')

        const productTitle = productElement.querySelector('h1').textContent
        const imgSuarce = event.target.currentSrc

        let conditionalElementSize = ``
        if (activeTab == 'Jam' || activeTab == 'Alkoholfreie Getränke' || activeTab == 'Süßigkeiten') {
            conditionalElementSize = `
            <div class="form-group">
                <label for="size">Select Size:</label>
                <select id="size" name="size" required>
                    <option value="" disabled selected>Select size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </div>`
        }

        productDetailsModal.innerHTML =
            `<div class="modal-content" >
                    <span class="close" id="closeOrderdetails">&times;</span>
                    <h2>${productTitle}</h2>
                    <div class="orderDetails" id="prductDetail">
                        <div class="Details">
                            <img src="${imgSuarce}" alt="undefined">
                        </div>
                        <form id="orderForm">
                            <div class="form-group">
                                <label for="box">Enter box:</label>
                                <input type="number" id="box" name="box" placeholder="Enter quantity in box" min="1" max="10000" required>
                            </div>
                            ${conditionalElementSize}
                
                            <button type="submit" id="submitBtn">Add to Order</button>
                        </form>
    
                    </div>
            </div>`

        productDetailsModal.style.display = "block"
        document.getElementById("closeOrderdetails").addEventListener('click', () => { productDetailsModal.style.display = "none" })

        document.getElementById('orderForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the page from refreshing

            const box = document.getElementById('box').value;
            let size = ''
            if (document.getElementById('size')) size = document.getElementById('size').value

            // Append the new order details
            const { imgSuarce, productTitle } = temporaryData

            orderInfoArr.push({
                box: box,
                size: size,
                imgSuarce: imgSuarce,
                productTitle: productTitle
            })
            temporaryData = {}
            // Optionally reset the form fields
            orderForm.reset();

            orderAddredDot.classList.add('red-dot')
            btn2.classList.add('scale-Up')



            startScrolliing()
            productDetailsModal.style.display = "none"
            setTimeout(() => {
                btn2.classList.remove('scale-Up')
            }, 500);
        });

        temporaryData = { productTitle: productTitle, imgSuarce: imgSuarce }
    }))
}

document.getElementById('clickthisbutton').addEventListener('click', () => {
    console.log('this button is workiing this is the or button')
})

document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the page from refreshing


    const fullName = document.getElementById('Full Name').value;
    const company = document.getElementById('Company').value;
    const phoneNumber = document.getElementById('Phone Number').value;
    const email = document.getElementById('Email').value;

    // Append the new order details

    userInfo = {
        fullName: fullName,
        company: company,
        phoneNumber: phoneNumber,
        email: email
    }

    document.getElementById('userForm').reset();
    document.getElementById('userInfo').style.display = "none"

    displayTypeOptions()
});

document.getElementById('Email').addEventListener('change', () => {
    const fullName = document.getElementById('Full Name').value;
    const company = document.getElementById('Company').value;
    const phoneNumber = document.getElementById('Phone Number').value;
    const email = document.getElementById('Email').value;

    // Append the new order details

    userInfo = {
        fullName: fullName,
        company: company,
        phoneNumber: phoneNumber,
        email: email
    }
    saveToLocalStorage('userInfo', userInfo)
})


btn.addEventListener('click', () => {
    modal.style.display = "block";

    displayOrderSummary(); // Call the function to display order details
})
btn2.addEventListener('click', () => {
    modal.style.display = "block";

    displayOrderSummary(); // Call the function to display order details
})
span.addEventListener('click', () => {
    console.log('is this working')
    modal.style.display = "none";



})


closeTypeOptions.addEventListener('click', () => document.getElementById('typeOptions').style.display = "none")
closeUserInfo.addEventListener('click', () => document.getElementById('userInfo').style.display = "none")

window.addEventListener('click', (event) => {

    //disable the scroll feture if modals are on 
    let allModalsElements = document.getElementsByClassName('modal')
    let allModalElementsArr = Array.from(allModalsElements)
    let isAllModalsClosed = allModalElementsArr.every(Element => Element.style.display == 'none')

    if (!isAllModalsClosed) stopScrolliing()
    else startScrolliing()

    if (event.target == modal || event.target == productDetailsModal) {
        modal.style.display = "none";
        productDetailsModal.style.display = "none";
        startScrolliing()

    }


})
function deleteOrder(index) {
    // Remove the order from the array using the index
    orderInfoArr.splice(index, 1);
    orderAddredDot.classList.remove('red-dot')
    // Re-render the order summary
    displayOrderSummary();
}

// Function to display order details (example content)
function displayOrderSummary() {
    let orderProducts = document.getElementById("orderDetails")


    if (orderInfoArr.length == 0) {
        console.log('orderinfoarr is empty')
        orderProducts.innerHTML = `
        <div class="empty-cart-container">
            <img src="./empty-cart.png">
            <div class="empty-cart-message">
                <h2>Your cart is empty!</h2>
                <p>Looks like you haven’t added anything to your cart yet.</p>
                <a href="./" >Shop Now</a >
            </div>
        </div>
        
        `
    }
    else {


        orderProducts.innerHTML = ''
        console.log('orderInfoarr:', orderInfoArr)
        orderInfoArr.forEach((orderElement, index) => {

            orderProducts.innerHTML += `
                    <div class="order-product">
                        <img src="${orderElement.imgSuarce}" alt="${orderElement.productTitle}">
                        <div class="product-details">
                            <h3>${orderElement.productTitle}</h3>
                            <p>Size: ${orderElement.size}</p>
                            <p>box: ${orderElement.box}</p>
                        </div>
                        <div class="elemenateOrder">
                            <h3  data-delete-index="${index}"id="orderProductDelete">×</h3>
                        
                        </div>
                        
                    </div>
                    
                     
               `
        })
        orderProducts.innerHTML += '<button class="buttonSumbit" id="placeOrder">Place Order</button>'
        const deleteButtons = document.querySelectorAll('[data-delete-index]')

        document.getElementById('placeOrder').addEventListener('click', () => {
            document.getElementById('userInfo').style.display = "block"
            const enteredUserInfo = getToLocalStorage('userInfo')
            if (enteredUserInfo == undefined) {
                document.getElementById('Full Name').value = enteredUserInfo.fullName
                document.getElementById('Company').value = enteredUserInfo.company
                document.getElementById('Phone Number').value = enteredUserInfo.phoneNumber
                document.getElementById('Email').value = enteredUserInfo.email
                
            }
        })

        deleteButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                const deleteIndex = event.currentTarget.getAttribute('data-delete-index');
                deleteOrder(deleteIndex);
            });
        })
        saveToLocalStorage('order', orderInfoArr);
    }
}


document.getElementById('placeOrderEmail').addEventListener('click', () => placeOrder('email'))
document.getElementById('placeOrderWhatsApp').addEventListener('click', () => placeOrder('whatsapp'))

function placeOrder(type) {
    console.log(type)
    let testedFinalEncodedOrderUrlLink = ''
    let totalNormalText = ''


    orderInfoArr.forEach(item => {
        let sizeUrlText = item.size == undefined ? `%0ASize%3A%20${item.size}`: ''
        testedFinalEncodedOrderUrlLink += `%0AProducts%20name%3A%20${item.productTitle}%0Abox%3A%20${item.box}${sizeUrlText}%0A
            `
        totalNormalText += `
            Costumer Name: ${userInfo.fullName}
            Company Name: ${userInfo.company}
            Phone Number: ${userInfo.phoneNumber}
            Email address: ${userInfo.email}


            Products name: ${item.productTitle}
            box: ${item.box}
            Size: ${item.size}
        `
    })

    if (type == 'email') {
        console.log('email is working')
        const email = "recipient@example.com"
        const subject = encodeURIComponent("Order")
        const body = encodeURIComponent(totalNormalText)
        // Construct the mailto link


        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`

        window.location.href = mailtoLink;

    }
    else {


        let encodedTestedFinalUrlLink = `https://wa.me/613452735?text=Name%3A%20${userInfo.fullName}%0ACompany%20Name%3A%20${userInfo.company}%0APhone%20Number%3A%20${userInfo.phoneNumber}%0AEmail%3A%20${userInfo.email}%0A${testedFinalEncodedOrderUrlLink}
        `
        window.open(encodedTestedFinalUrlLink, '_blank');
    }

}

function displayTypeOptions() {
    document.getElementById('typeOptions').style.display = "block"
}


document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    console.log(enteredUsername, enteredPassword)

    if (enteredUsername === userName && enteredPassword === password) {
        window.location.href = "edit.html"
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('loginBtn').addEventListener('click', () => {
    loginModal.style.display = "block"
})
document.getElementById('closeLoginModal').addEventListener('click', () => loginModal.style.display = "none")
loginModal.style.display = "none"


document.querySelector('.modal').style.display = "none"
document.getElementById('orderModal').style.display = 'none'
productDetailsModal.style.display = "none"
document.getElementById('typeOptions').style.display = "none"
document.getElementById('userInfo').style.display = "none"

document.getElementById('scrollToBottom').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,  // Scroll to the maximum height of the page
        behavior: 'smooth'  // Adds smooth scrolling animation
    });
})