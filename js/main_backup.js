
var img = ['book1.jpg', 'book2.jpg','book3.jpg','book4.jpg'];
var info_html = $('<table><tr></tr></table>');
function productos() {
    console.log('called on productos');
     
    info_html.empty();
    for (var i = 0; i < 4; i++) {
        info_html.append('<td id="'+i+'"><a href="javascript:agregarProducto('+i+');"><img class="pic" src="img/'+img[i]+'"/></a></td>');
    }  
    var info = $('#info_content');
    info.html(info_html);
}

var compras = 0;

function agregarProducto(e) {
    console.log('se compro el producto: '+ e);
    compras += 1;
};

function carrito() {
    console.log('Agregando producto');
    info_html.empty();
    for (var i = 0; i < compras; i++) {
        info_html.append('<td id="'+i+'"><a href="javascript:agregarProducto('+i+');"><img class="pic" src="img/'+img[i]+'"/></a></td>');
    }  
    var info = $('#info');
    info.html(info_html);

     

}

function historial() {
    console.log('called on historial');

    var info = {
    
    };
}

