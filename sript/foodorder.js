//Image slider
const imageArray =["./images/img1.jpg","./images/img2.png","./images/img3.png", "./images/img4.png","./images/img5.png","./images/img6.png","./images/img7.png","./images/img8.png" ,"./images/img9.png" ,"./images/img10.png","./images/img11.png" ]
img_slide = document.querySelector("#img_slide")
let imgIndex=0;
function slideShow() {
    img_slide.setAttribute("src", imageArray[imgIndex]);
    imgIndex++
    if (imgIndex >= imageArray.length) {
         imgIndex=0;
    }
}
setInterval(slideShow, 3000)
// section one input functionalities

const input_invoice = document.getElementById("input_invoice")
const input_date = document.getElementById("input_date")
const btn = document.getElementById("btn")

const date_li = document.getElementById("date_li")
const invoice_li = document.getElementById("invoice_li")

const date_error = document.querySelector("#date_error")
const invoice_error = document.querySelector("#invoice_error")

btn.addEventListener("click", function () { 
        dateStore.push(input_date.value)
        invoiceStore.push(input_invoice.value)
        renderDateInvoice()
        renderInvoiceStore()
})

let dateStore=[]
let invoiceStore=[]

const localStorageDate = JSON.parse(localStorage.getItem("dateStore"))
if(localStorageDate){
    dateStore = localStorageDate
    renderDateInvoice()
}

const localStorageInvoice = JSON.parse(localStorage.getItem("invoiceStore"))
if(localStorageInvoice){
    invoiceStore = localStorageInvoice
    renderInvoiceStore()
}

function renderDateInvoice() {
    let dateStoreItem =""
    for (let i = 0; i < dateStore.length; i++) {
        dateStoreItem+="<li> Date: "+dateStore[i]+"</li>"  
    }
  date_li.innerHTML = dateStoreItem
}

function renderInvoiceStore() {
    let invoiceItem =""
    for (let i = 0; i < invoiceStore.length; i++) {
        invoiceItem+="<li> Order Number: "+invoiceStore[i]+"</li>"  
    }
    invoice_li.innerHTML =invoiceItem
}

// Section two input validation and functionality
//getting the id of each input
const category_id = document.getElementById("category_id")
const product_id = document.getElementById("product_id")
const category_name = document.getElementById("category_name")
const product_name = document.getElementById("product_name")
const availabe_stock = document.getElementById("availabe_stock")
const unit_price = document.getElementById("unit_price")

// getting erorr message id

const category_li = document.getElementById("category_li")
const availablestock_li = document.getElementById("availablestock_li")
const categoryname_li = document.getElementById("categoryname_li")
const product_name_list = document.getElementById("product_name_list")
const productId_li = document.getElementById("productId_li")
const product_name_li = document.getElementById("product_name_li")
const unitprice_li = document.getElementById("unitprice_li")

const product_category_btn = document.getElementById("product_category_btn")

//creating datastore for each input

let categoryId=[]
let productId=[]
let categoryName=[]
let produtName=[]
let availableStock=[]
let unitPrice = []


product_category_btn.addEventListener("click", function () {
    
    categoryId.push(category_id.value)
    categoryName.push(category_name.value)
    availableStock.push(availabe_stock .value)
    productId.push(product_id.value)
    produtName.push(product_name.value)
    unitPrice.push(unit_price.value)
    rendercategoryId()
    rendercategoryName()
    rendercategoryAvailableStock()
    renderProductId()
    renderProductName()
    renderUnitPrice()
})

const localStoragecategoryId = JSON.parse(localStorage.getItem("categoryId"))
if(localStoragecategoryId){
    categoryId = localStoragecategoryId
    rendercategoryId()
}
function rendercategoryId() {
    let categoryItem =""
    for (let k = 0; k < categoryId.length; k++) {
        categoryItem+="<li> Category ID : "+categoryId[k]+"</li>"  
    }
    category_li.innerHTML =categoryItem; 
}

const localStoragecategoryName = JSON.parse(localStorage.getItem("categoryName"))
if(localStoragecategoryName){
    categoryName = localStoragecategoryName
    rendercategoryName()
}
function rendercategoryName() {
    let categoryNameItem =""
    for (let k = 0; k < categoryName.length; k++) {
        categoryNameItem+="<li> Category Name : "+categoryName[k]+"</li>"  
    }
    categoryname_li.innerHTML =categoryNameItem; 
}
const localStorageavailableStock = JSON.parse(localStorage.getItem("availableStock"))
if(localStorageavailableStock){
    availableStock = localStorageavailableStock
    rendercategoryAvailableStock()
}
function rendercategoryAvailableStock() {
    let availableStockItem =""
    for (let k = 0; k < availableStock.length; k++) {
        availableStockItem +="<li> Current Stock : "+availableStock[k]+"</li>"  
    }
    availablestock_li.innerHTML =availableStockItem; 
}
const localStorageproductId = JSON.parse(localStorage.getItem("productId"))
if(localStorageproductId){
    productId = localStorageproductId
    renderProductId()
}
function renderProductId() {
    let productIdItem =""
    for (let k = 0; k <  productId.length; k++) {
        productIdItem  +="<li> Product ID : "+productId[k]+"</li>"  
    }
    productId_li.innerHTML =productIdItem; 
}

const localStorageprodutName = JSON.parse(localStorage.getItem("produtName"))
if(localStorageprodutName){
    produtName = localStorageprodutName
    renderProductName()
}
function renderProductName() {
    let productNameItem =""
    for (let k = 0; k <  produtName.length; k++) {
        productNameItem  +="<li> Product Name : "+produtName[k]+"</li>"  
    }
    product_name_li.innerHTML =productNameItem; 
}
const localStorageunitPrice = JSON.parse(localStorage.getItem("unitPrice"))
if(localStorageunitPrice){
    unitPrice = localStorageunitPrice
    renderUnitPrice()
}

function renderUnitPrice() {
    let unitPriceItem =""
    for (let k = 0; k <  unitPrice.length; k++) {
        unitPriceItem  +="<li> Unit Price : "+unitPrice[k]+"</li>"  
    }
    unitprice_li.innerHTML =unitPriceItem; 
}

// Section two input validation and functionality
//getting the user input
const quantity = document.getElementById("quantity")
const discount = document.getElementById("discount")
const how_to_pay = document.getElementById("how_to_pay")
const amount = document.getElementById("amount")

const discount_li = document.getElementById("discount_li")
const quantit_li = document.getElementById("quantit_li")
const how_to_pay_li = document.getElementById("how_to_pay_li")
const amount_li = document.getElementById("amount_li")



const btn_rs = document.getElementById("btn_rs")



let quantityStore =[]
let discountStore=[]
let howToPayStore =["yes","No"]
let Amount=[]

btn_rs.addEventListener("click", function () {
    quantityStore.push(quantity.value)
    discountStore.push(discount.value)
    howToPayStore.push(how_to_pay.value)
    Amount.push(amount.value)
    renderQuantity()
    renderDiscount()
    renderhowToPayStore()
    renderAmount()
})
const localStoragequantityStore = JSON.parse(localStorage.getItem("quantityStore"))
if(localStoragequantityStore){
    quantityStore = localStoragequantityStore
    renderQuantity() 
}
function renderQuantity() {
    let quantityItem =""
    for (let k = 0; k <  quantityStore.length; k++) {
        quantityItem+="<li> Unit Price : "+quantityStore[k]+"%</li>"  
    }
    quantit_li.innerHTML =quantityItem; 
}
const localStoragediscountStore = JSON.parse(localStorage.getItem("discountStore"))
if(localStoragediscountStore){
    discountStore = localStoragediscountStore
    renderDiscount() 
}
function renderDiscount() {
    let discountItem =""
    for (let k = 0; k <  discountStore.length; k++) {
        discountItem+="<li> Discount : "+discountStore[k]+"%</li>"  
    }
    discount_li.innerHTML = discountItem; 
}

function renderhowToPayStore() {
    let cash = document.getElementById("cash").value
    let check = document.getElementById("check").value
    let howToPayItem =""
    for (let k = 0; k <  howToPayStore.length; k++) {
        if (how_to_pay === check) {
            howToPayItem +="<li> How to Pay: "+howToPayStore[0]+"</li>" 
        }
        else if (how_to_pay===cash) {
            howToPayItem +="<li> How to Pay:  "+howToPayStore[1]+"</li>"
        }
          
    }
    how_to_pay_li.innerHTML = howToPayItem ; 
}
const localStorageAmount = JSON.parse(localStorage.getItem("Amount"))
if(localStorageAmount){
    Amount = localStorageAmount
    renderAmount() 
}
function renderAmount() {
    let amountItem =""
    for (let k = 0; k <  Amount.length; k++) {
        amountItem+="<li> Amount : #"+Amount[k]+"</li>"  
    }
    amount_li.innerHTML = amountItem; 
}

// this section contain all button
const savebtn = document.getElementById("savebtn")
const deletebtn = document.getElementById("deletebtn")
const listbtn = document.getElementById("listbtn")
const clearbtn = document.getElementById("clearbtn")
const closebtn = document.getElementById("closebtn")

savebtn.addEventListener("dblclick", function () {
    
        renderDateInvoice()
        renderInvoiceStore() 

        rendercategoryId()
        rendercategoryName()
        rendercategoryAvailableStock()
        renderProductId()
        renderProductName()
        renderUnitPrice()

        renderQuantity()
        renderDiscount()
        renderhowToPayStore()
        renderAmount()

        localStorage.setItem("dateStore", JSON.stringify(dateStore))
        localStorage.setItem("invoiceStore", JSON.stringify(invoiceStore)) 

        localStorage.setItem("categoryId", JSON.stringify(categoryId))
        localStorage.setItem("productId", JSON.stringify(productId))
        localStorage.setItem("categoryName", JSON.stringify(categoryName))
        localStorage.setItem("produtName", JSON.stringify(produtName))
        localStorage.setItem("availableStock", JSON.stringify(availableStock))
        localStorage.setItem("unitPrice", JSON.stringify(unitPrice))

        localStorage.setItem("quantityStore", JSON.stringify(quantityStore))
        localStorage.setItem("discountStore", JSON.stringify(discountStore))
        localStorage.setItem("howToPayStore", JSON.stringify(howToPayStore))
        localStorage.setItem("Amount", JSON.stringify(Amount))
})

deletebtn.addEventListener("dblclick", function () {
    alert("welcome my people")  
})

listbtn.addEventListener("dblclick", function () {
    alert("welcome my people")  
})

clearbtn.addEventListener("dblclick", function () {
        renderDateInvoice()
        renderInvoiceStore() 

        rendercategoryId()
        rendercategoryName()
        rendercategoryAvailableStock()
        renderProductId()
        renderProductName()
        renderUnitPrice()

        renderQuantity()
        renderDiscount()
        renderhowToPayStore()
        renderAmount()
         dateStore=[]
         invoiceStore=[]

        categoryId=[]
        productId=[]
        categoryName=[]
        produtName=[]
        availableStock=[]
        unitPrice = []

         quantityStore =[]
         discountStore=[]
         howToPayStore =["yes","No"]
         Amount=[]
    localStorage.clear() 
})
closebtn.addEventListener("dblclick", function () {
    alert("welcome my people")  
})

   



rendercategoryId()
rendercategoryName()
rendercategoryAvailableStock()
renderProductId()
renderProductName()
renderUnitPrice()