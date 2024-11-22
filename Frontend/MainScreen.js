//ProfileHover
const Profilebutton = document.querySelector(".profileButton")
const Profile = document.getElementById("profileDetails")

const Profiletoggle = () => {
    Profile.style.display = "block"
}
const Profiletoggle1 = () => {
    Profile.style.display = "none"
}
Profilebutton.addEventListener('mouseenter', Profiletoggle)
Profilebutton.addEventListener('mouseleave', Profiletoggle1)
Profile.addEventListener('mouseenter', Profiletoggle)
Profile.addEventListener('mouseleave', Profiletoggle1)

//Products Details in Array
let productLists = [
    {
        productImage: "./Assets/samsung-galaxy-m30s_grande.webp",
        productName: "Samsung Galaxy M30S",
        Details: "4 GB RAM | 128 GB ROM",
        Price: "₹15,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqQu3Xdsjm59_QsrHUr-_VMRuAN1xTLT-kr_nF2m9GksaPj_hbhQZ3KfzBt_3RU7sX6LSemtRRvNFrySnn5BewwnzBnuSJYqOI_hrHeYT7&usqp=CAE",
        productName: "Motorola Moto G84",
        Details: "12 GB RAM | 256 GB ROM",
        Price: "₹18,999"
    },
    {
        productImage: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZBq5j2M-VcLsUMwi7tn6OI30QWlfOlm8IEKyStf-Ji43hlfEXuXq3e6ctrY-6CV_ybAc0ClAugakny8qRdcpUXto6Y-9MqJNB8Blbm3SGHG9wWt5YRjfYgg&usqp=CAE",
        productName: "Redmi Note 13 5G",
        Details: "6 GB RAM | 128 GB ROM",
        Price: "₹16,999"
    },
    {
        productImage: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRcUJhJrfni0lDAYjoYkv04RSS4t0mxaONEVRg-sMdOzyBkqqRYbgImttNcjWeUYdQFYl7F80mkbbpr5xiFiPW1GC9n5hX0pXO5l6E-7FXwGv_WtrIajk1A0A&usqp=CAE",
        productName: "Vivo Y16",
        Details: "4 GB RAM | 64 GB ROM",
        Price: "₹15,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSHuqbvSRP0bYQ0UP45YVhdSJbd-KoPPrJeuaERLWwRVmBUzX0mtGB9OyVFnwlYcHHFiNAqm73bR591Nfm1v-jvDU6Ke1anwI5t1Z2_vusjMgHUfsSPk6kRjA&usqp=CAE",
        productName: "Nothing Phone (2a) 5G",
        Details: "8 GB RAM | 128 GB ROM",
        Price: "₹23,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSm8AsTxa7l5PK0iV1EIx9lga7o7F3hyOi0es_HWQv2qC2fV2mRGluaOg9Fv5kL52XHKCjOcxIpBi5wTDHo_9VOovXikQN0rxYpsasMsLlO_Btu0s2WcRtGNQ&usqp=CAE",
        productName: "OnePlus Nord CE 3 Lite",
        Details: "8 GB RAM | 128 GB ROM",
        Price: "₹15,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNnnDR8gYoyCymZ3DyWwpbqRHUgthERxaFgNtS-NnACJl0ZaQyr5kOT4eqyWheI0-GBI64OtgxV3ArcLYadxugdBGGZ6aPLDOtLGHdY7N7QzppYzH9SLCu&usqp=CAE",
        productName: "Apple iPhone 13",
        Details: "128 GB ROM",
        Price: "₹43,999"
    },
    {
        productImage: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjL0xk_Lfsnf6qElBGpOK--VTGXwvK7Pcg-njG5kyCz4ETQpGjFaP3Clraja6sbNhr8pEKe7dopU5PZS9rgHms0rcbGeBl-Hq898xAtnjqCMa6_wDepLUT&usqp=CAE",
        productName: "CMF Phone 1 5G",
        Details: "6 GB RAM | 128 GB ROM",
        Price: "₹14,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0rXnijTLnNHz2iHon7vs5LYdSlo6qWNuV3afSKjw8hw5h5JY6IiltLqCgdDBvj-jVe5m79v8EPz7WC-UJUO-WUjc_EuRYAm6DQpOmt1JAH9oF_XEPbMtL&usqp=CAE",
        productName: "Oppo F25 Pro 5G",
        Details: "8 GB RAM | 128 GB ROM",
        Price: "₹23,999"
    },
    {
        productImage: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRq7us2rrCSZ3is1LtYhtrcJd_T0Uhh3i8MOrJMWbzStbiIuAdOaqa2TbpAMeFBp3iiGieBKTpXGi_j55UB3xZD289c2MwD07KxLAALMsBiVEzpgSnkHNxwfg&usqp=CAE",
        productName: "Samsung Galaxy A23 5G",
        Details: "6 GB RAM | 128 GB ROM",
        Price: "₹21,999"
    }
]

//Prducts Format

const products = document.getElementById("products")

for (let i = 0; i < productLists.length; i++) {

    let product = productLists[i]

    let card = document.createElement("div")
    card.className = "card"

    let productImage = document.createElement("img")
    productImage.src = product.productImage
    productImage.className = "card-img-top productImage mt-2"

    let productDetails = document.createElement("div")
    productDetails.className = "card-body"

    let productName = document.createElement("h5")
    productName.innerText = product.productName

    let productInfo = document.createElement("p")
    productInfo.innerText = product.Details

    let productPrice = document.createElement("p")
    productPrice.innerText = "Price: " + product.Price
    productPrice.className = "fw-bold"

    let addCartButton = document.createElement("button")
    addCartButton.className = "addCartButton p-2 ps-3 pe-3"
    addCartButton.innerText = "Add to Cart"

    card.appendChild(productImage)
    card.appendChild(productDetails)
    productDetails.appendChild(productName)
    productDetails.appendChild(productInfo)
    productDetails.appendChild(productPrice)
    productDetails.appendChild(addCartButton)
    products.appendChild(card)
}

//Popup for Cart added
const addCartButton = document.getElementsByClassName("addCartButton")
const addedPopMessage = document.querySelector(".addedPopMessage")

const appearAdded = () => {
    addedPopMessage.style.display = "block"
}
const disappearAdded = () => {
    setTimeout(() => {
        addedPopMessage.style.display = "none"
    }, 1000);
}

//Showing Number of items
//Add cart button already called in a before function
const cartCount = document.querySelector(".cartCount")
let Number = 0;
let addCount = () => {
    Number++
    cartCount.innerText = Number
}
for (let i = 0; i < addCartButton.length; i++) {
    addCartButton[i].addEventListener('click', appearAdded) //For Popup
    addCartButton[i].addEventListener('click', disappearAdded) // For disappear Popup
    addCartButton[i].addEventListener('click', addCount)//For Count
}

//showing and Hide Function for the Menu Bar

const menuButton = document.getElementById("menuBarImg")
const menuBar = document.querySelector(".menuBar")
const menuCancelButton = document.getElementById("cancelButton")

let showMenu = () => {
    menuBar.style.display = "block"
    menuCancelButton.style.display = "block"
}
let hideMenu = () => {
    menuBar.style.display = "none"
    menuCancelButton.style.display = "none"
}
menuButton.addEventListener('click', showMenu)
menuCancelButton.addEventListener('click', hideMenu)

//Showing and Hiding Function for Individual sections in Menu
const menuActionButton = document.getElementsByClassName("menuActionButton")
const menuIndividualDetails = document.getElementsByClassName("menuIndividualDetails")

for (let i = 0; i < menuActionButton.length; i++) {
    let menuProfileBehaviour = () => {
        if (menuIndividualDetails[i].style.display == "none") {
            menuIndividualDetails[i].style.display = "block"
        }
        else {
            menuIndividualDetails[i].style.display = "none"
        }
    }
    menuActionButton[i].addEventListener('click', menuProfileBehaviour)
}