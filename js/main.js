
var img = ['book1.jpg', 'book2.jpg','book3.jpg','book4.jpg'];
var numProductos = img.length;

var info = $('<table><tr></tr></table>');
var info_content = $('#info-content');
var info_opciones = $('#info-opciones');

var _this = this;
var compras= [];
var historialCompras = [];
var comprasJSON = {};

function productos() {
    info.empty();
    info_opciones.empty();
    console.log('called on productos');
    var info_content = $('#info-content');
    info_content.empty();

    for (var i = 0; i < numProductos; i++) {
        info.append(`
            <td>
                <a href="javascript:addProduct(`+(i+1)+`);">
                    <img class="pic"  src="img/`+img[i]+`"/>
                </a>
            </td>
            `);
    }  

    info_content.html(info);
    console.log('final de productos');
}

var contadorCompras = 0;

function addProduct(e) {
    console.log('(addProduct): se compro el producto: '+ e);
    compras.push(e);
    contadorCompras += 1;
};

function carrito() {
    info.empty();


    console.log('las compras hechas fueron: ');
    for (var i = 0; i < contadorCompras; i++) {
        var imagen = 'book' + compras[i] + '.jpg';
        info.append('<td><img class="pic" src="img/'+imagen+'"/></td>');
    }  

    //var info_ = $('#info');
    info_content.html(info);

    var info_opciones = $('#info-opciones');
    info_opciones.html(`
        <p>
            <a href="javascript:comprar();">comprar</a>
            <a href="javascript:borrarCarrito();">borrar</a>
        </p>
        `);
}

function borrarCarrito() {
    console.log('borrar carrito');
    contadorCompras = 0;
    compras = [];
    //    compras.length = 0;
    info.empty();
}

function comprar() {
    //var historialCompras = [];
    //var comprasJSON = {};
      
     
     
    
    alert('tus productos han sido procesados exitosamente!!!');
    borrarCarrito(); 
}
