
var $ = function (id) {
    return document.getElementById(id);
};

function calculateDV(price, discount) {
    var finalprice = price;
	{
        finalprice = price - (price * discount / 100);
    }
    finalprice = finalprice.toFixed(2);
    return finalprice;
}

function calculateDollar(price,discount) {
	var discDollar;
	{
	discDollar = price- (price - (price * discount/100));
	}
	discDollar = discDollar.toFixed(2);
	return discDollar;
}

function finalentries () {
    var price = parseFloat ( $("itemprice").value );
    var discount = parseFloat ( $("discountper").value );
   
    
    if (isNaN(price) || isNaN(discount) ) {
        alert("Please enter the value first");
    }
    else if (0 < price && price > 999) {  
		alert("Item price must be greater than 0 and less than 1000");
    }
	else if (0 < discount && discount > 69) {
		alert("Discount % must be greater than 0 and less than 70");
	}
	else{
		$("discountdollar").value = calculateDollar(price, discount);
		$("netprice").value = calculateDV(price, discount);
	}
}
window.onload = function () {
    $("calculate").onclick = finalentries;
	   
};

