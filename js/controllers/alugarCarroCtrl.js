
alugaCarro.controller('alugarCarroCtrl', function ($scope) {
    $scope.nomeAplicacao = "Aluguel de Carro";
    $scope.carros = [
        {marca: "Chevrolet", modelo: "Onix", placa: "ABC-1111", tipo : "Hatch" , cor: "Preto", anoModelo: "2018", combustivel: "Flex", dataInclusao: new Date(), valorDiaria: 60},
        {marca: "Chevrolet", modelo: "Blazer", placa: "ABC-1234", tipo : "SUV", cor: "Prata", anoModelo: "2016", combustivel: "Diesel", dataInclusao: new Date(), valorDiaria: 60},
        {marca: "Ford", modelo: "Fiesta", placa: "ABC-1234", tipo : "Hatch" , cor: "Branca", anoModelo: "2016", combustivel: "Flex", dataInclusao: new Date(), valorDiaria: 60},
        {marca: "Honda", modelo: "City", placa: "ABC-1234", tipo : "Sedã" , cor: "Preta", anoModelo: "2017", combustivel: "Flex", dataInclusao: new Date(), valorDiaria: 60},
        {marca: "Toyota", modelo: "Corolla", placa: "ABC-1234", tipo : "Sedã", cor: "Cinza", anoModelo: "2016", combustivel: "Flex", dataInclusao: new Date(), valorDiaria: 60},
        {marca: "Toyota", modelo: "Picape Hilux", placa: "ABC-1234", tipo : "Picape", cor: "Prata", anoModelo: "2017", combustivel: "Diesel", dataInclusao: new Date(), valorDiaria: 60}
    
    ];

    $scope.marcas = [
        { codigoMarca: 1, nomeMarca: "Chevrolet" },
        { codigoMarca: 2, nomeMarca: "Ford" },
        { codigoMarca: 3, nomeMarca: "Volkswagen" },
        { codigoMarca: 4, nomeMarca: "Fiat" },
        { codigoMarca: 5, nomeMarca: "Honda" },
        { codigoMarca: 6, nomeMarca: "Toyota" },
        { codigoMarca: 7, nomeMarca: "Audi" }

    ];

    $scope.cores = [

        { codigoCor: 1, nomeCor: "Branca" },
        { codigoCor: 2, nomeCor: "Preta" },
        { codigoCor: 3, nomeCor: "Prata" },
        { codigoCor: 4, nomeCor: "Cinza" },
        { codigoCor: 5, nomeCor: "Vermelha" },
        { codigoCor: 6, nomeCor: "Azul" }

    ];

    $scope.tipos = [

        { codigoTipo: 1, nomeTipo: "Hatch", classeVeiculo: "Carro de passeio" },
        { codigoTipo: 2, nomeTipo: "Cupê", classeVeiculo: "Carro de passeio" },
        { codigoTipo: 3, nomeTipo: "Sedã", classeVeiculo: "Carro de passeio" },
        { codigoTipo: 4, nomeTipo: "Perua", classeVeiculo: "Carro de passeio" },
        { codigoTipo: 5, nomeTipo: "Picape", classeVeiculo: "Utilitário" },
        { codigoTipo: 6, nomeTipo: "Van", classeVeiculo: "Utilitário" },
        { codigoTipo: 7, nomeTipo: "Minivan", classeVeiculo: "Utilitário" },
        { codigoTipo: 8, nomeTipo: "SUV", classeVeiculo: "Utilitário" }

    ];

    $scope.combustiveis = [

        { codigoCombustivel: 1, nomeCombustivel: "Gasolina" },
        { codigoCombustivel: 2, nomeCombustivel: "Alcool" },
        { codigoCombustivel: 3, nomeCombustivel: "Diesel" },
        { codigoCombustivel: 4, nomeCombustivel: "Gás/GLP" },
        { codigoCombustivel: 5, nomeCombustivel: "Flexível" },
        { codigoCombustivel: 6, nomeCombustivel: "Elétrico" },

    ];

    
    $scope.cilindradas = [

        { codigoCilindrada: 1, descricaoCilindrada: "1,0 litro" },
        { codigoCilindrada: 2, descricaoCilindrada: "1,4 litro" },
        { codigoCilindrada: 3, descricaoCilindrada: "1,8 litro" },
        { codigoCilindrada: 4, descricaoCilindrada: "2,0 litro" },
        { codigoCilindrada: 5, descricaoCilindrada: "2,5 litro" },
        { codigoCilindrada: 6, descricaoCilindrada: "3,0 litro" },

    ];


    //$scope.marcas = ["Chevrolet", "Ford", "Honda", "Toyota", "Fiat", "Volkswagen"];
    //$scope.cores = ["Branca", "Preto", "Prata", "Cinza", "Vermelha", "Azul"];
    //$scope.tipos = ["Hatch", "Cupê", "Sedã", "Perua", "Picape", "Van", "Minivan", "SUV"];
    //$scope.combustiveis = ["Gasolina", "Álcool", "Diesel", "Gás/GLP", "Flexível"];

    $scope.adicionarCarro = function (carro) {
        carro.dataInclusao = new Date();
        $scope.carros.push(carro);
        delete $scope.carro;
        $scope.CadastroVeiculo.$setPristine();
    };
});
