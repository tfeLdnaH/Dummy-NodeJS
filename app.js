/**
 * Created by Anderson on 01/07/2017.
 */
function placeAnOrder(orderNumber) {
    console.log("Customer order:", orderNumber);

    cookDeliveryFood( function () {
        console.log("delivery food order:", orderNumber);
    });
}

//simulate a 5 second operation
function cookDeliveryFood(callback) {
    setTimeout(callback, 5000);  //não precisa esperar os 5 ssegundos, meio que diz para o sistema vai fazer o q vc tem q fazer e depois de 5 segundos me executa

}

//simulate user webrequest

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
