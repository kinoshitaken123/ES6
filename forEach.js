var  foods = ['pizza', 'beef', 'bread'];

for(var i = 0; i < foods.length; i ++) {
    console.log(foods[i]);
}

foods.forEach(function(food){
    console.log(food);
});

// 数字の配列を用意する
var numbers = [1,2,3,4,5];

// 合計をほじする変数を用意する
var sum = 0;

// 配列の一つ一つの数字を合計に足す
numbers.forEach(function(numbers){
    sum += numbers;
});

// 合計を表示する
sum;