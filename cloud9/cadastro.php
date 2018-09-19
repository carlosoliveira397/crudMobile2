<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "dbCrudMobile2");
        
        $nome = $_POST['nome'];
        $cpf = $_POST['cpf'];
        
        $query = "INSERT INTO tb_pessoa VALUES (NULL ,  '$nome',  '$cpf')";
        
        mysqli_query($conexao, $query);
        
        echo "Cadastro efetuado com sucesso!";
    }catch (Exception $e){
        echo "Erro ao cadastrar!";
    }
?>