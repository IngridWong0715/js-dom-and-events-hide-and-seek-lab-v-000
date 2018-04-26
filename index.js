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




function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
