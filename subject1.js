// forループからの脱却
// forループよりもforEachメソッドを使ってコードを読みやすくしたい

function handlePosts() {
    var posts = [
      { id: 23, title: 'JSニュース' },
      { id: 52, title: 'リファクター・シティ' },
      { id: 105, title: 'Rubyの良いところ' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

var posts = [{ id: 23, title: 'JSニュース' }, { id: 52, title: 'リファクター・シティ' },{ id: 105, title: 'Rubyの良いところ' }];

var posts = 0;

posts.forEach(function(posts){
    sum += posts;
})

sum;

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];
  var areas = [];

  var images = [  { height: 10, width: 30 }, { height: 20, width: 90 }, { height: 54, width: 32 }];
  var images = 0;
  images.forEach(function(images){
      sum += images
  });

  sum;