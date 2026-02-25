document.addEventListener('DOMContentLoaded',()=>{

     
    
    // start menu responsibility
    const hamber = document.getElementById('hamber');
    const mobileNav = document.getElementById('mobile-nav');
    const desktopLogo = document.getElementById('desktop-logo');
    const overlay = document.getElementById('overlay');
    const menuCross = document.getElementById('menu-cross');
    const cartCross = document.getElementById('cart-cross');

    
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

        phoneForm.style.opacity = 0;
        phoneForm.style.visibility = 'hidden';

        const activeCategory = document.querySelector('.category-btn.active');
        if(activeCategory)renderFood(activeCategory);
    });

    menuCross.addEventListener('click',()=>{
        mobileNav.style.right = '-55vw';
        desktopLogo.style.opacity = 1;
        overlay.style.display = 'none';
    });

    cartCross.addEventListener('click',()=>{
        cartDrawer.style.left = '-100vw';
        overlay.style.display = 'none';

        const activeCategory = document.querySelector('.category-btn.active');
        if(activeCategory)renderFood(activeCategory);
        
    });

    window.addEventListener('resize', ()=>{
        mobileNav.style.right = '-55vw';
        desktopLogo.style.opacity = 1;
        overlay.style.display = 'none';
        cartDrawer.style.left = '-100vw'
    });

  
    // end menu responsibility
// start show cart pannel
const cartDesktop = document.getElementById('cart-desktop');
const cartMobile = document.getElementById('cart-mobile');
const cartDrawer = document.getElementById('cart-drawer');




cartDesktop.addEventListener('click', ()=>{
    cartDrawer.style.left = 0;
    overlay.style.display = 'block';
});

cartMobile.addEventListener('click', ()=>{
    cartDrawer.style.left = 0;
    overlay.style.display = 'block';
});
// end show cart pannel

//start handle food

    
      //get cart
      updateCart();
      

// first load
const firstCategory = categoryBtns[0];
updateUI(firstCategory);



// each category click
categoryBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{

   
        updateUI(btn);
    
    
        // scroll to center of elemtnt
        btn.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});

 
        
    });



});


//handle increase order
     foodList.addEventListener('click',incDecClick);
     cartDrawer.addEventListener('click',incDecClick);



});


//end handle food


// start handle phone form
const phoneForm = document.getElementById('phone-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',() => {
    phoneForm.style.opacity = 1;
    phoneForm.style.visibility = 'visible';
    overlay.style.display = 'block';
})
// end handle phone form




