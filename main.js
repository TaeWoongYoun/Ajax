// get
// $.get('https://codingapple1.github.io/hello.txt')
// .done(function(data){
//     console.log(data)
// })
// .fail(function(){
//     console.log('실패함')
// })

// post
// $.post('https://codingapple1.github.io/hello.txt', {name:'kim'})
// .done(function(data){
//     console.log(data)
// })

// $.get('https://codingapple1.github.io/price.json')
// .done(function(price){
//     console.log(price.price)
// })
// var card = 
// `<div class="col-sm-4">
// <img src="https://via.placeholder.com/600" class="w-100">
// <h5>Card title</h5>
// <p>가격 : 70000</p>
// </div>`


// document.querySelectorAll('.row').forEach(function(row){
//     // row.innerHTML = card;
//     for(var i = 0; i < 3; i++){
//         row.innerHTML += card;
//     }
// })

// for(var i = 0; i < 3; i++){
//     row.innerHTML = card;
// }

var products =  [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];

products.forEach((a, i)=>{
    var 템플릿 = 
    `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(템플릿)
});