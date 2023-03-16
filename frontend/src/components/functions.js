
function addEditSymbol() {
  let editSymbol = document.querySelectorAll('div.editSymbol')
  let deleteSymbol = document.querySelectorAll('div.deleteSymbol')
  
  editSymbol.forEach(element => {
    element.classList.remove('remove')
  });

  deleteSymbol.forEach(element => {
    element.classList.add('remove')
  });
 
}

function addDeleteSymbol() {
  let editSymbol = document.querySelectorAll('div.editSymbol')
  let deleteSymbol = document.querySelectorAll('div.deleteSymbol')
  
  editSymbol.forEach(element => {
    element.classList.add('remove')
  });

  deleteSymbol.forEach(element => {
    element.classList.remove('remove')
  });
 
}



  const functions = {addEditSymbol, addDeleteSymbol}

  export default functions