const foods = [
    // pizzas
    {
        id: 1, name: 'پیتزا پپرونی', price: 120000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
    {
        id: 2, name: 'پیتزا مخلوط', price: 150000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
    {
        id: 3, name: 'پیتزا مخصوص', price: 180000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
    {
        id: 4, name: 'پیتزا رست بیف', price: 120000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
    {
        id: 5, name: 'پیتزا مرغ', price: 150000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
    {
        id: 6, name: 'پیتزا گوشت و مرغ', price: 180000, url:'./assets/img/pizzas/pizza.webp', alt:'pizza', ings:'فرش چیزبرگر + سیب زمینی', category: 'pizza'
    },
   
    //sandwiches
    {
        id: 7, name: 'بلغاری', price: 120000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },
    {
        id: 8, name: 'فلافل', price: 150000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },
    {
        id: 9, name: 'هات داگ', price: 180000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },
    {
        id: 10, name: 'بندری', price: 120000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },
    {
        id: 11, name: 'همبرگر', price: 150000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },
    {
        id: 12, name: 'ژامبون', price: 180000, url:'./assets/img/sandwiches/hotdog.webp', alt:'hotdog', ings:'فرش چیزبرگر + سیب زمینی', category: 'sandwich'
    },

    //appetizers
    {
        id: 13, name: 'سیب زمینی ساده', price: 120000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },
    {
        id: 14, name: 'سیب زمینی پنیری', price: 150000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },
    {
        id: 15, name: 'ذرت مکزیکی', price: 180000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },
    {
        id: 16, name: 'کورن پنیری', price: 120000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },
    {
        id: 17, name: 'سیب ویژه', price: 150000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },
    {
        id: 18, name: 'ذرت تنوری', price: 180000, url:'./assets/img/appetizers/fries.webp', alt:'fries', ings:'فرش چیزبرگر + سیب زمینی', category: 'appetizer'
    },

    //drink
    {
        id: 19, name: 'نوشابه', price: 120000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },
    {
        id: 20, name: 'لیموناد', price: 150000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },
    {
        id: 21, name: 'دلستر', price: 180000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },
    {
        id: 22, name: 'نوشابه', price: 120000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },
    {
        id: 23, name: 'آب معدنی', price: 150000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },
    {
        id: 24, name: 'نوشابه زیرو', price: 180000, url:'./assets/img/drinks/lemonad.webp', alt:'lemonad', ings:'فرش چیزبرگر + سیب زمینی', category: 'drink'
    },

    //salad
    {
        id: 25, name: 'سالاد مکزیکی', price: 120000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
    {
        id: 26, name: 'سالاد فصل', price: 150000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
    {
        id: 27, name: 'سالاد کلم', price: 180000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
    {
        id: 28, name: 'سالاد سزار', price: 120000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
    {
        id: 29, name: 'سالاد مخصوص', price: 150000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
    {
        id: 30, name: 'سالاد سرآشپز', price: 180000, url:'./assets/img/salads/salad.webp', alt:'salad', ings:'فرش چیزبرگر + سیب زمینی', category: 'salad'
    },
];

const foodList = document.getElementById('food-list');
const categoryBtns = document.querySelectorAll('.category-btn');