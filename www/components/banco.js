// This is a JavaScript file
$(document).on("click","#btnEnviar", function(){
    var parametros = {
        "nome": $("#txtNome").val(),
        "cpf": $("#txtCpf").val()
    };

    $.ajax({
        type:"post",
        url:"https://crudmobile2-carlos397.c9users.io/cadastro.php",
        data: parametros,
        success: function(data){
          navigator.notification.alert(data);
          $("#txtNome").val("");
          $("#txtCpf").val("");
        },
        error:function(data){
          navigator.notification.alert("erro: "+data);
        }
    });
});

$(document).on( "click", "#btnListar", function(){
  $(location).attr("href", "lista.html");
});

function preenchepessoas(){
  $.ajax({
    type:"post",
    url:"https://crudmobile2-carlos397.c9users.io/listarpessoas.php",
    dataType: "json",
    success: function(data){
      var itemlista = "";
      $.each(data.pessoas, function(i, dados){
        itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
      });
      $("#lista").html(itemlista);
    },
    error:function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
}

$(document).on("change","#lista", function(){
  var codigoSelecionado = $("option:selected", ("#lista")).val();
  $.ajax({
    type:"get",
    url:"https://crudmobile2-carlos397.c9users.io/listarumapessoa.php",
    data:"codigo="+codigoSelecionado,
    dataType: "json",
    success: function(data){
      $.each(data.pessoas, function(i, data){
        $("#codigo").val(data.codigo);
        $("#txtNome").val(data.nome);
        $("#txtCpf").val(data.cpf);
      });
    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click", "#deletar", function(){
  var codigoSelecionado = $("option:selected", ("#lista")).val();
  $.ajax({
    type:"get",
    url:"https://crudmobile2-carlos397.c9users.io/deletar.php",
    data:"codigo="+codigoSelecionado,
    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click", "#salvarEdit", function(){
  var parametros = {
    "codigo": $("#codigo").val(),
    "nome": $("#txtNome").val(),
    "cpf": $("#txtCpf").val()
  };

  $$.ajax({
    type:"post",
    url:"https://crudmobile2-carlos397.c9users.io/alterar.php",
    data: parametros,
    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },
    error:function(data){
      navigator.notification.alert("erro: "+data);
    }
  });
});

$(document).on("click", "#editar", function(){
  habilita();
});

$(document).on("click", "#cancelar", function(){
  desabilita();
  $("txtNome").val("");
  $("txtCpf").val("");
});

function desabilita(){
  $("#txtNome").prop('readonly',true);
  $("#txtCpf").prop('readonly',true);
}

function habilita(){
  $("#txtNome").prop('readonly',false);
  $("#txtCpf").prop('readonly',false);
}