document.addEventListener('DOMContentLoaded',()=>{

   

    // start menu responsibility
    const hamber = document.getElementById('hamber');
    const mobileNav = document.getElementById('mobile-nav');
    const desktopLogo = document.getElementById('desktop-logo');
    const overlay = document.getElementById('overlay');
    const menuCross = document.getElementById('menu-cross');
    const cartCross = document.getElementById('cart-cross');
    const foodList = document.getElementById('food-list');
    const cartDesktop = document.getElementById('cart-desktop');
const cartMobile = document.getElementById('cart-mobile');
const cartDrawer = document.getElementById('cart-drawer');

let curName = '';
let curPhone = '';

    
    hamber.addEventListener('click', ()=>{
        mobileNav.style.right = 0;
        desktopLogo.style.opacity = 0;
        overlay.style.display = 'block';
    });

    overlay.addEventListener('click',()=>{
        mobileNav.style.right = '-55vw';
        desktopLogo.style.opacity = 1;
        overlay.style.display = 'none';
        cartDrawer.style.left = '-100vw';

        formWrapper.style.opacity = 0;
        formWrapper.style.visibility = 'hidden';

        const activeCategory = document.querySelector('.category-btn.active');
        if(foodList && activeCategory){
            renderFood(activeCategory,foodList);
        }
      
    });

    menuCross.addEventListener('click',()=>{
        mobileNav.style.right = '-55vw';
        desktopLogo.style.opacity = 1;
        overlay.style.display = 'none';
    });

    if(cartCross){
        cartCross.addEventListener('click',()=>{
            cartDrawer.style.left = '-100vw';
            overlay.style.display = 'none';
    
            const activeCategory = document.querySelector('.category-btn.active');
            if(foodList && activeCategory){
            renderFood(activeCategory,foodList);
            }
            
        });
    }

    window.addEventListener('resize', ()=>{
        mobileNav.style.right = '-55vw';
        desktopLogo.style.opacity = 1;
        overlay.style.display = 'none';
        cartDrawer.style.left = '-100vw';

        formWrapper.style.opacity = 0;
        formWrapper.style.visibility = 'hidden';
    });

  
    // end menu responsibility
// start show cart pannel




if(cartDesktop){
    cartDesktop.addEventListener('click', ()=>{
        cartDrawer.style.left = 0;
        overlay.style.display = 'block';
    });
}


if(cartMobile){
    cartMobile.addEventListener('click', ()=>{
        cartDrawer.style.left = 0;
        overlay.style.display = 'block';
    });
}
// end show cart pannel

//start handle food

    
//get cart
      updateCart();
      renderCart();
      
const categoryBtns = document.querySelectorAll('.category-btn');
// first load
if(categoryBtns && foodList){
    const firstCategory = categoryBtns[0];
    updateUI(firstCategory,categoryBtns, foodList);
}





// each category click
if(categoryBtns && foodList){
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', ()=>{
    
       
            updateUI(btn,categoryBtns,foodList);
        
        
            // scroll to center of elemtnt
            btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
    
     
            
        });
    
    
    
    });
}





//handle increase order
if(foodList){
    foodList.addEventListener('click',incDecClick);
}

if(cartDrawer){
    cartDrawer.addEventListener('click',incDecClick);
}
   





//end handle food


// start handle phone form visibility
const formWrapper = document.getElementById('form-wrapper');
const loginBtn = document.getElementById('login-btn');

if(loginBtn){
  
    loginBtn.addEventListener('click',() => {
       
        formWrapper.style.opacity = 1;
        formWrapper.style.visibility = 'visible';
        overlay.style.display = 'block';
    });
}

// end handle phone form visibility

//start handle forms
const phoneForm = document.getElementById('phone-form');
const otpForm = document.getElementById('otp-form');
const nameForm = document.getElementById('name-form');
const loginData = document.getElementById('login-data');

const msg = document.getElementById('msg');
const verifMsg = document.getElementById('verif-msg');
const nameMsg = document.getElementById('name-msg');

  //start check if user logged in
  fetch('./php/check-auth.php').then(res => res.json()).then(data => {
    if(data.logged){
        if(loginData){
            loginData.innerHTML = `<a href="./pannel.html"><button class="hover-btn" id="data-btn"><span>${data.name}</span></button></a>`;
        }
     
        curName = data.name;
        curPhone = data.phone;
    }



// start handle phone form submit
if(phoneForm){
    phoneForm.addEventListener('submit', (e) => {

        e.preventDefault();
        msg.innerText = '';
    
        const formData = new FormData(phoneForm);
    
        fetch('./php/handle-phone.php',{
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(data => {
            
            const message = data.message;
            const code = data.otp;
            if(code){
                alert(`کد تائید شما: ${code}`);
        
        phoneForm.style.opacity = 0;
        phoneForm.style.visibility = 'hidden';
        
        otpForm.style.opacity = 1;
        otpForm.style.visibility = 'visible';
    
            }
        
        
            msg.innerText = message;
          
        });
       
    });
}



// end handle phone form submit


// start handle otp form subit
if(otpForm){
    otpForm.addEventListener('submit',(e)=>{
    
    
        e.preventDefault();
    
        msg.innerText = '';
    
        const formData = new FormData(otpForm);
    
        fetch('./php/handle-verification.php',{
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(data => {
           
            const verifMessage = data.message;
            if(verifMessage){
                verifMsg.innerText = verifMessage;
            }
           
    
            const situation = data.situation;
    
            if(situation === 'sign-up'){
                nameForm.style.opacity = 1;
                nameForm.style.visibility = 'visible';
    
                otpForm.style.opacity = 0;
                otpForm.style.visibility = 'hidden';
            }
    
            if(situation === 'sign-in'){
                const name = data.name;
              
                if(name){
                    alert(`${name} با موفقیت وارد شدید.`);
                    curName = name;
                    curPhone = data.phone;
    
                    loginData.innerHTML = `<a href="./pannel.html"><button class="hover-btn" id="data-btn"><span>${name}</span></button></a>`;
                    formWrapper.style.opacity = 0;
                    formWrapper.style.visibility = 'hidden';
                    overlay.style.display = 'none';
                }
            }
    
          
        });
    });
}

// end handle otp form subit

//start handle name form submit
if(nameForm){
    nameForm.addEventListener('submit', (e)=>{

        e.preventDefault();
    
        nameMsg.innerText = '';
    
        const formData = new FormData(nameForm);
        
    
        fetch('./php/handle-name.php',{
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(data => {
            const nameMessage = data.message;
              const name = data.name;
           
    
            if(nameMessage){
                nameMsg.innerText = nameMessage;
            }
    
            if(name){
                alert(`${name} با موفقیت وارد شدید.`);
                curName = name;
                curPhone = data.phone;
                loginData.innerHTML = `<a href="./pannel.html"><button class="hover-btn" id="data-btn"><span>${name}</span></button></a>`;
                formWrapper.style.opacity = 0;
                formWrapper.style.visibility = 'hidden';
                overlay.style.display = 'none';
            }
            
    
          
        });
    });
}

//end handle name form submit

//end handle forms

//start handle pannel
const mainPannel = document.getElementById('main-pannel');
const pannelBtns = document.querySelectorAll('.pannel-btn');

// first load
if(pannelBtns && mainPannel){

    const firstPannel = pannelBtns[0];
  console.log(curName);
    updatePannelUI(firstPannel,pannelBtns, mainPannel,curName,curPhone);
}






// each pannel click
if(pannelBtns && mainPannel){
    pannelBtns.forEach(pannel => {
    
        pannel.addEventListener('click', ()=>{
          
            updatePannelUI(pannel,pannelBtns, mainPannel,curName,curPhone);
        
            
        });
    
    
    
    });
}

const logoutBtn = document.getElementById('logout');
if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
        fetch('./php/logout.php',{
            method : 'GET'
        }).then(res => {
            if(res){
                
                window.location.href = './index.html';
              
                  
                
            }
        }
        )
    });
}




//end handle pannel

    
 });
 //end check if user logged in


});
