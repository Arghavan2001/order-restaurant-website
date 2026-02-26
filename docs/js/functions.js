
let cart = {};

function add(id){
    if(!(id in cart)){
        cart[id] = 1;
    }else{
        cart[id]++;
    }

    saveCart();
    renderCart();
}

function remove(id){
    if(!(id in cart))return;

    cart[id]--;
    if(cart[id] <= 0){
        delete cart[id];
    }

    saveCart();
    renderCart();
}

//save in browser
function saveCart(){
    localStorage.setItem('browse-cart', JSON.stringify(cart));
}

//get from browser
function updateCart(){
    const savedCart = localStorage.getItem('browse-cart');
    if(savedCart){
        cart = JSON.parse(savedCart);
    }
}

//handle cart
function renderCart(){

const cartDiv = document.getElementById('cart-div');


if(cartDiv){
    
cartDiv.innerHTML = '';
let total = 0;

if(Object.keys(cart).length === 0){
    cartDiv.innerHTML = '<div class="d-flex justify-content-center food-box p-3"><p class="text-center">سبد خرید خالی است</p></div>';

    return;
}



for(let id in cart){
    const qty = cart[id];
    const food = foods.find(food => food.id == id);

    if(!food){
        continue;
    }
    const price = food.price * qty;
    total += price;

    const cartItem = document.createElement('div');


    cartItem.innerHTML = `
    <div class="main-div col-12 p-3 rounded-2" id="${food.id}">

                    <div class="d-flex food-box">
                  <div class="cart-img-wrapper">
                     <img src="${food.url}" alt="${food.alt}">
              
                     </img>
                  </div>
                  <div class="details-wrapper me-2 p-1">
                      <h5 class="pt-1 pb-1">${food.name}</h5>
                    
                      <p class="pt-1 pb-2">${new Intl.NumberFormat('fa-IR').format(food.price)}</p>
             
                  </div>
                  </div>
             <div class="d-flex justify-content-end">
                  <div class="qty-wrapper is-active ">
                   <button class="inc-qty flex-1 d-flex justify-content-center"><span><svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" width="8" height="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span></button>
   <span>${qty}</span>
   <button class="dec-qty flex-1 d-flex justify-content-center">
     ${qty > 1 
       ? '<span><svg viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" width="8" height="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="#000000"> <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>' 
       : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z" fill="#000000"></path> <path d="M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z" fill="#000000"></path> <path d="M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z" fill="#000000"></path> <path d="M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z" fill="#000000"></path> <path d="M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z" fill="#000000"></path> </g></svg>`}
   </button>
                                    </div>
                                    </div>
                      
                </div>
    `;
    
    cartDiv.appendChild(cartItem);

    


const totalPrice = document.createElement('div');
totalPrice.classList = 'col-12 p-2 rounded-2';
totalPrice.innerHTML = `   <div class="d-flex justify-content-between food-box p-3">
                <span>جمع کل: </span><span>${Intl.NumberFormat('fa-IR').format(total)} تومان</span>
                </div>`
cartDiv.appendChild(totalPrice);

const placeOrderBtn = document.createElement('div');
placeOrderBtn.classList = 'd-flex justify-content-end';
placeOrderBtn.innerHTML = `  <div class="hover-btn">
                            <button id="checkout-btn"><span>ثبت سفارش</span></button>
                            </div>`;
cartDiv.appendChild(placeOrderBtn);
}
}


}

//change plus wrapper
function updateBtn(wrapper,qty){
   wrapper.classList.add('is-active');
   wrapper.classList.remove('hover-btn');
   wrapper.innerHTML = `
  <button class="inc-qty flex-1 d-flex justify-content-center"><span><svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" width="8" height="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>plus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="#000000"> <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span></button>
   <span>${qty}</span>
   <button class="dec-qty flex-1 d-flex justify-content-center">
     ${qty > 1 
       ? '<span><svg viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" width="8" height="8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>minus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="#000000"> <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg></span>' 
       : `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z" fill="#000000"></path> <path d="M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z" fill="#000000"></path> <path d="M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z" fill="#000000"></path> <path d="M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z" fill="#000000"></path> <path d="M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z" fill="#000000"></path> </g></svg>`}
   </button>
 `;
}

//reset
function resetBtn(wrapper){
    wrapper.classList.remove('is-active');
    wrapper.classList.add('hover-btn');
    wrapper.innerHTML = '<button class="first-plus"><span>+</span></button>';
}

// activate current category & deactive others
function setActivateTab(tab,tabBtns){
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tab.classList.add('active');
}

//render & show food
function renderFood(category,foodList){
foodList.innerHTML = '';


const firstFoods = foods.filter(food => food.category === category.dataset.category);
    firstFoods.forEach(food => {
        const id = food.id;
        const name = food.name || '...';
        const price = new Intl.NumberFormat('fa-IR').format(food.price) || '...';
        const url = food.url;
        const alt = food.alt;
        const ings = food.ings || '...';
        const firstDiv = document.createElement('div');

        firstDiv.id = id;
        firstDiv.className = 'main-div col-12 col-sm-6 col-lg-3 p-3 rounded-2';
      
        firstDiv.innerHTML = `
     <div class="show-ings">
                      <div class="d-flex flex-lg-column food-box">
                    <div class="img-wrapper ">
                       <img src="${url}" alt="${alt}">
                       <div class="ings-overlay"><p>${ings}</p></div>
                       </img>
                    </div>
                    <div class="details-wrapper me-2 me-lg-0 p-1">
                        <h5 class="text-lg-center pt-1 pb-1">${name}</h5>
                        <p class="ings-txt">${ings}</p>
                        <p class="text-lg-center pt-1 pb-2">${price}</p>
                    </div>
                    </div>
               <div class="d-flex justify-content-lg-center justify-content-end">
                    <div class="qty-wrapper hover-btn">
                                      <button class="first-plus"><span>+</span></button>
                                      </div>
                                      </div>
                                      </div>
                    `;

    foodList.appendChild(firstDiv);
    
    const qtyWrapper = firstDiv.querySelector('.qty-wrapper');
    const qty = cart[id] || 0;

    if(qty === 0){
        resetBtn(qtyWrapper);
        
    }else{
        updateBtn(qtyWrapper,qty);
    }
    
});

}

//final rendering for render & show category's details
function updateUI(category,categoryBtns,foodList){
setActivateTab(category,categoryBtns);
renderFood(category,foodList);
renderCart();
}

//handle inc dec click
function incDecClick(e){
    const mainDiv = e.target.closest('.main-div');
    if(!mainDiv)return;
    
    const id  = mainDiv.id;

    if(e.target.closest('.first-plus') || e.target.closest('.inc-qty')){
        add(id);
    }else if(e.target.closest('.dec-qty')){
        remove(id);
    }else{
        return;
    }

    const qtyWrapper = mainDiv.querySelector('.qty-wrapper');
    const qty = cart[id] || 0;

    qty === 0 ? resetBtn(qtyWrapper) : updateBtn(qtyWrapper,qty);
}











//render & show food
function renderPannel(pannel,mainPannel,name,phone){
    mainPannel.innerHTML = '';
    var description = pannel.dataset.pannel;

    switch (description) {
        case 'profile':
            mainPannel.innerHTML = `     <div class="d-flex flex-column gap-3">
            <div>
                <label class="ms-5">نام و نام خانوادگی:</label>
                <span>${name}</span>
            </div>
            <div>
                <label class="ms-5">شماره همراه:</label>
                <span>${phone}</span>
            </div>
        </div>`;
            break;
        case 'my-orders':
            
            break;
    
        default:
            break;
    }
    }

//final rendering for render & show pannel's details
function updatePannelUI(pannel,pannelBtns,mainPannel,name,phone){
    setActivateTab(pannel,pannelBtns);
    renderPannel(pannel,mainPannel,name,phone);
    }
    
