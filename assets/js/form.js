
function calcTotal() {

  var quantity = parseInt(document.getElementById("quantity").value);
  var category = document.getElementById("category").value

  var discount = 1;  //Asumo que se puede hacer una compra sin aplicar descuento
  var price = 200;

  if (category == "1") {
    discount = 0.2;
  } else if (category == "2") {
    discount = 0.5;
  } else if (category == "3") {
    discount = 0.85;
  }

  let totalPrice = price * quantity * discount;

  document.getElementById('total').innerText = totalPrice;


  var name= document.getElementById("name").value;
  if(name=="Toby" || name=="toby" ){
    document.getElementById('total').innerText = "--No Toby's Allowed!!"
  }

}

var x = document.getElementById('btnSubmit');
x.addEventListener('click', calcTotal);


function clean() {
  document.getElementById('total').innerHTML = '';
  document.getElementById('form').reset();
}

var y = document.getElementById('btnReset');
y.addEventListener('click', clean);

