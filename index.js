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
    
    let next = [...document.body.querySelector('div#grand-node').children]
    console.log(`next=${next}`)
    let depth=0;
    let current = next.shift()
    while (current !== undefined) {
        try{
            while (current.children !== undefined){
                if (current.children.length>0) { 
                    for (let i = 0; i < current.children.length; i++) {
                        next.push(current.children[i]) 
                        console.log(`current = ${current}`)
                    }
                } else {
                    console.log('no children here!')
                    console.log(current)
                    return(current)
                }
            console.log(`now next=${next}`)
            current = next.shift()
        }
        }     
        catch(error){
            console.log(error)
        }
    return current
    }
}
deepestChild(); 