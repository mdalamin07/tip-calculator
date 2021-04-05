
$(document).ready(function(){
function tipCalculetor(){
var bill = $("#bill").val();

var amount = $("#amount").val();

var tip = $("#tip");

var totalAmount = $("#total_amount");

var tipCal = bill *(amount / 100);

var total = +bill + tipCal;

tip.text(tipCal.toFixed(2));

totalAmount.text(total.toFixed(2));

};

$("#btn").click(tipCalculetor);

});

