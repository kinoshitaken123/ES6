var products = [
    { name: 'きゅうり',type: '野菜'},
    { name: 'バナナ', type:'フル ーツ'},
    { name: 'セロリ', type:'野菜'},
    { name: 'オレンジ', type:'フル ーツ'},
]

var filteredProducts = [];

for(var i = 0; i < products.length; i++) {
    if(products[i].type === 'フルーツ') {
        filteredProducts.push(products[i]);
    }
}

//filteredProducts

products.filter(function(product){
    return product.type === 'フルーツ';
});