var a = [];
$(document).ready(function () {
  $("#add_product").click(function () {
    var temp = "";

    var productid = $("#product_sku").val();
    var productname = $("#product_name").val();
    var productprice = $("#product_price").val();
    var productquantity = $("#product_quantity").val();
    var obj = {
      id: productid,
      name: productname,
      price: productprice,
      quantity: productquantity,
    };
    if (
      productid != "" &&
      productname != "" &&
      productprice != "" &&
      productquantity != ""
    ) {
      if (check(productid)) {
        a.push(obj);
        $("#notification .success").css("display", "block");
        $("#notification .error").css("display", "none");
        display();
      } else {
        $("#notification .success").css("display", "none");

        $("#notification .error").css("display", "block");
      }
    }
    if (productid == "") {
      temp = "*Product SKU Field is Empty";
      $("#sku").html(temp);
    }
    if (productname == "") {
      temp = "*Product Name Field is Empty";
      $("#pname").html(temp);
    }
    if (productprice == "") {
      temp = "*Product Price Field is Empty";
      $("#pprice").html(temp);
    }
    if ((productquantity = "")) {
      temp = "*Product Quantity Field is Empty";
      $("#pquantity").html(temp);
    }
  });
  function check(b) {
    for (var i = 0; i < a.length; i++) {
      if (a[i].id == b) {
        return false;
      }
    }
    return true;
  }
});
function deleterecord(r) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == r) {
      a.splice(i, 1);
    }
  }
  display();
}

function display() {
  var temp = "";
  for (var i = 0; i < a.length; i++) {
    temp +=
      "<tr><td>" +
      a[i].id +
      "</td><td>" +
      a[i].name +
      "</td><td>" +
      a[i].price +
      "</td><td>" +
      a[i].quantity +
      "</td><td><a href=# onclick='editrecord(" +
      a[i].id +
      ")'>Edit</a><a  id='space' href=# onclick='deleterecord(" +
      a[i].id +
      ")'>Delete</a></td></tr>";
  }

  $("#data").html(temp);
}

function editrecord(r) {
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == r) {
      $("#product_sku").val(a[i].id);
      $("#product_name").val(a[i].name);
      $("#product_price").val(a[i].price);
      $("#product_quantity").val(a[i].quantity);
      break;
    }
  }
  $("#add_product").css("display", "none");
  $("#updaterecord").css("display", "block");
}

function update() {
  var productid = $("#product_sku").val();
  var productname = $("#product_name").val();
  var productprice = $("#product_price").val();
  var productquantity = $("#product_quantity").val();
  for (var i = 0; i < a.length; i++) {
    if (a[i].id == productid) {
      a[i].name = productname;
      a[i].price = productprice;
      a[i].quantity = productquantity;
    }
  }
  $("#add_product").css("display", "block");
  $("#updaterecord").css("display", "none");
  display();
}
