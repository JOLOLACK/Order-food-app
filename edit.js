
//import { ProductData } from './jason.js';
//import { ProductDataID } from './ProductDataBAse2ID.js'
import { uploadImage, retrieveData, addData, deleteImage } from './firebase.js'

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
function processProductData(data) {
    ProductDataID = data
    displayProducts(data)

    console.log(ProductDataID)
}
main();


function getRandomId() {
    let uuid = crypto.randomUUID();
    return uuid

}


const addproductDetailsModal = document.getElementById('addproductDetailsModal')
const changeProductDetailsModal = document.getElementById('changeProductDetailsModal')
const confirmDeleteModal = document.getElementById('confirmDeleteModal')






let localstorageActiveTab = localStorage.getItem('activeTab')
let activeTab = localstorageActiveTab ? localstorageActiveTab:'1&1'
let newImgSrc = 0
console.log(localstorageActiveTab)

function getPlaceholder() {
    let htmlPlusHolder = ''
    let productDiv = document.createElement('div');
    productDiv.className = 'product addBtn';
    productDiv.id = 'addproduct';



    let anchor = document.createElement('a');

    let img = document.createElement('img');
    let div = document.createElement('div');

    

    img.src = '/icons8-plus-96.svg'
    img.alt = 'Add Prodcut'


    anchor.appendChild(img);

    anchor.appendChild(document.createElement('div'))

    productDiv.appendChild(anchor);
    return productDiv
}



function displayProducts(data) {
    let ProductDatasID = data
    let tabsNames = Object.keys(ProductDatasID);
    let tabsElement = document.getElementById('tabs');
    let tabsContainer = document.getElementById('tab-container')

    tabsElement.innerHTML = '';
    tabsNames.forEach(tabName => {

        let tabButton = document.createElement('button');
        tabButton.textContent = tabName;

        tabButton.className = `tab-link ${tabName == activeTab ? 'active' : ''}`;
        tabButton.onclick = (event) => openTab(event, tabName);

        tabsElement.appendChild(tabButton);

        // Create and append tab content container
        let tabContent = document.createElement('div');
        tabContent.id = tabName;
        tabContent.className = `tab-content ${tabName == activeTab ? 'active' : ''}`;

        // Create and append products
        let productsContainer = document.createElement('div');
        productsContainer.className = 'products';
        productsContainer.appendChild(getPlaceholder())

        ProductDatasID[tabName].forEach(productDetails => {

            let productDiv = document.createElement('div');
            productDiv.className = 'product';


            let anchor = document.createElement('a');
            let h1 = document.createElement('h1');
            let img = document.createElement('img');
            let div = document.createElement('div');
            let h3 = document.createElement('h3');


            div.className = productDetails.PerBox ? 'ProductNames' : '';
            img.src = productDetails.imgSrc;
            img.alt = productDetails.imgAlt;

            // the anchor is getting the id too because in the prodcutEvent 
            //listner it doesnt register the div id

            anchor.id = productDetails.id
            productDiv.id = productDetails.id;

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

        
    })
    addFuntionalityToCards()

}


function renderProductsForActiveTab() {
    console.log('reloaded2')
    const tabContent = document.getElementById(activeTab);
    tabContent.innerHTML = ''; // Clear existing products

    let productsContainer = document.createElement('div');
    productsContainer.className = 'products';
    productsContainer.appendChild(getPlaceholder())

    ProductDataID[activeTab].forEach(productDetails => {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';



        let anchor = document.createElement('a');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');

        img.src = productDetails.imgSrc;

        // the anchor is getting the id too because in the prodcutEvent 
        //listner it doesnt register the div id

        anchor.id = productDetails.id
        productDiv.id = productDetails.id;
        //img.alt = productDetails.imgAlt;

        h1.textContent = productDetails.name;

        anchor.appendChild(img);
        anchor.appendChild(h1);
        productDiv.appendChild(anchor);
        productsContainer.appendChild(productDiv);
    });

    tabContent.appendChild(productsContainer);
}


function openTab(event, tabName) {
    localStorage.setItem('activeTab', tabName);
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    //console.log(event.currentTarget.classList, tabName)

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    //console.log(document.getElementById(tabName).classList)
    event.currentTarget.classList.add('active');

    activeTab = tabName
}

let selectedProductID = null
let selectedProductImageSrc = null

function addFuntionalityToCards() {
    let productArrClass = document.querySelectorAll('.product')

    productArrClass.forEach(productDiv => productDiv.addEventListener('click', (event) => {
        const productElement = event.currentTarget;
        console.log('i am a card ana i am being clicked')
        if (productElement.querySelector('h1')) {
            const productTitle = productElement.querySelector('h1').textContent;
            const productImgSrc = productElement.querySelector('img').src;
            const productId = productElement.querySelector('a').id
            const productImgPath = productElement.querySelector('img').alt


            const productPerBox = productElement.querySelector('h3').textContent

            selectedProductImageSrc = productImgPath
            selectedProductID = productId

            changeProductDetailsModal.style.display = 'block'
            document.getElementById('ChangedProductName').value = productTitle
            document.getElementById('ChangedProductNumsPerbox').value = productPerBox

            console.log(`Name: ${productTitle}, Img Src: ${productImgSrc}, Id: ${productId}`);
        }
        else {

            addproductDetailsModal.style.display = 'block'

        }
        //
    }))
    

    document.getElementById('deleteProdcut').addEventListener('click', () => {
        console.log(selectedProductID)
        if (selectedProductID !== null) {

            let newProductData = ProductDataID[activeTab].filter(item => item.id !== selectedProductID)

            selectedProductID = null
            console.log(newProductData)
            const referencePath = `dataBase/${activeTab}`
            const imgReferencePath = `images/${selectedProductImageSrc}`

            addData(referencePath, newProductData)
            deleteImage(imgReferencePath)



        }
        changeProductDetailsModal.style.display = 'none'
        
    })
    document.getElementById('deleteProdcutConfirmation').addEventListener('click', (e) => {
        e.preventDefault()
        confirmDeleteModal.style.display = 'block'
    })
}
document.getElementById('ChangeProductForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const changedtitle = document.getElementById('ChangedProductName').value
    const ChangedProductNumsPerbox = document.getElementById('ChangedProductNumsPerbox').value

    if (selectedProductID !== null) {

        let newProductData = ProductDataID[activeTab].map(item => {
            if (item.id === selectedProductID) {
                console.log(selectedProductID)
                return {
                    ...item,
                    name: changedtitle,
                    PerBox: ChangedProductNumsPerbox,
                };
            }
            return item;
        });
        selectedProductID = null

        const referencePath = `dataBase/${activeTab}`
        addData(referencePath, newProductData)



    }
    console.log('changeProdcut eventlsitern')
   
    changeProductDetailsModal.style.display = 'none'

    
    


});

let fileNameAdded = null

document.getElementById('imageInput').addEventListener('change', function (event) {
    const submitBtn = document.getElementById('addSubmitBtn')
    const loaderContainer = document.getElementById('loader-container')
    submitBtn.style.display = 'none'
    loaderContainer.style.display = 'block'

    setTimeout(() => {
        loaderContainer.style.display = 'none'
        submitBtn.style.display = 'block'

    }, 1500);

    const file = event.target.files[0]
    fileNameAdded = file.name
    uploadImage(file)
        .then(downloadURL => newImgSrc = downloadURL)

    console.log(file)
    if (file) {
        const reader = new FileReader()

        reader.onload = function (e) {
            // Store the image as a Data URL in the object
            newImgSrc = e.target.result
        }

        reader.readAsDataURL(file)
    }

});



document.getElementById('addProductForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newProductName = document.getElementById('newProductName').value;
    const newProductNumsPerbox = document.getElementById('newProductNumsPerbox').value


    const newImgUrlSrc = newImgSrc

    const newProduct = {
        id: getRandomId(),
        name: newProductName,
        imgSrc: newImgUrlSrc,
        PerBox: newProductNumsPerbox,
        imgAlt: fileNameAdded
    };
    fileNameAdded = null
    let productCurrently = ProductDataID[activeTab]
    productCurrently.unshift(newProduct)
    // Re-render the product list for the active tab
    console.log(newProduct)

    console.log(ProductDataID[activeTab])

    const referencePath = `dataBase/${activeTab}`

    addData(referencePath, productCurrently)
    // renderProductsForActiveTab()
    // addFuntionalityToCards()
    addproductDetailsModal.style.display = 'none';
    //console.log(ProductData)
    //console.log(ProductData[activeTab])

});




document.getElementById('closeChangeproductDetailsModal').addEventListener('click', () => { changeProductDetailsModal.style.display = 'none' })
document.getElementById('closeConfirmDeleteModal').addEventListener('click', () => { confirmDeleteModal.style.display = 'none' })

document.getElementById('closeAddproductDetailsModal').addEventListener('click', () => { addproductDetailsModal.style.display = 'none' })
addproductDetailsModal.style.display = 'none'
changeProductDetailsModal.style.display = 'none'
confirmDeleteModal.style.display = 'none'

