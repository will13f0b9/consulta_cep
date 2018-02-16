//http://www.mocky.io/v2/5a86296b31000071002531ed
jQuery(document).ready(function(){

    var loadCostumersSuccess = function(costumersList){
//        console.table(costumersList);
  /*       $.each(costumersList, function(index, cliente){
             $("#listar").append(`
                    <tr>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.pais}</td>
            </tr>
             `);
         });
    /*/

        
        var source   = $("#line").html();
 
        var template = Handlebars.compile(source);
        var html = template({
            clientes: costumersList
        });
               console.log(html);
               $('table tbody').html(html);

    };

    var loadCostumersError = function(){
    };

    var loadCostumers = function(){

        console.log('carregando cliente...');
        $.ajax({
            url: 'http://www.mocky.io/v2/5a86296b31000071002531ed',
            dataType: 'jsonp',
            error: loadCostumersError,
            success: loadCostumersSuccess

        });



    }();
});