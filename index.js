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