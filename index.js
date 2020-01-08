function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  let ulRankedList = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ulRankedList.length; i++) {
    ulRankedList[i].innerHTML = (parseInt(ulRankedList[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  next = [...document.body.querySelector('div#grand-node').children]
  console.log(`next = ${next}`)
  depth = 0
  current = next.shift()
  while (current !== undefined) {
    try {
      while (current.child !== undefined) {
        if(current.child.length > 0) {
          for (let i = 0; i < current.child.length; i++) {
            next.push(current.child[i])
            console.log(`current = ${current}`)
          }
        } else { 
          console.log(`There's no children here.`)
          console.log(current)
          return(current)
      }
    }
    catch(error){
      console.log(error)
    }
    return current
  }
}

deepestChild()

