function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var grands = document.getElementById('grand-node');
  while(grands.children !== undefined) {
    grands = grands.children;
  }
  return grands[0].children[0].children[0].children[0];
}

function increaseRankBy(n)
{
    var rankedListsLength = document.querySelectorAll('.ranked-list').length;
    var childrenLength = 0;
    for(var i = 0; i < rankedListsLength; i++)
    {
        childrenLength = document.querySelectorAll('.ranked-list')[i].children.length;
        for(var j = 0; j < childrenLength; j++)
        {
            document.querySelectorAll('.ranked-list')[i].children[j].innerHTML = parseInt(document.querySelectorAll('.ranked-list')[i].children[j].innerHTML) + n;
        }
    }
}