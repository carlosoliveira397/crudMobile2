<?php
    try{
        $conexao = mysqli_connect("localhost", "carlos397", "", "dbCrudMobile2");
        
        $query = "SELECT * FROM tb_pessoa ORDER BY cd_pessoa ASC";
        
        $result = mysqli_query($conexao, $query);
        
        $registro = array(
            'pessoas' => array()
        );
        $i =0;
        while($linha = mysqli_fetch_assoc($result)){
            $registro['pessoas'][$i] = array(
                'codigo' => $linha['cd_pessoa'],
                'nome' => $linha['nm_pessoa'],
                'cpf' => $linha['nr_cpf']
            );
            $i++;
        }
        
        echo json_encode($registro);
        
    }catch(Exception $e){
        echo "Erro ao cadastrar!";
    }
?>