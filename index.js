function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list li')
  lists.forEach( function(list){
    list.innerHTML = parseInt(list.innerHTML, 10) + n;
  });
}

function deepestChild(){
  let divs = document.getElementById('grand-node').querySelectorAll('div');
return divs[2].querySelector('div')

}
