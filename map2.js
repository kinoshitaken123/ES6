var cars = [
    { type: '軽自動車', price: '安い' },
    { type: '高級車', price: '高い'}
];

var prices = cars.map(function(car) {
    return car.price;
});

prices;