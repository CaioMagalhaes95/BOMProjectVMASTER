
drop database if exists bd_benergy_p5;
CREATE DATABASE BD_BENERGY_P5;

USE BD_BENERGY_P5;

drop table if exists materiais;
CREATE TABLE Materiais(
	IDMaterial int primary key not null auto_increment,
    nome varchar(255),
    descricao varchar(255),
    datac int,
    quantidade int,
    sistema varchar(255),
    massa int,
    custo int,
    unidadedemedida int,
    composicao varchar(255)

);


CREATE TABLE Carros(
	IDCarro int primary key not null auto_increment,
    nomeCarro varchar(100),
	descricaoCarro varchar(100)

);

CREATE TABLE Armazem(
	IDArmazem int primary key not null auto_increment,
	Prateleira varchar(30),
    tipodeproduto varchar(30)

);

CREATE TABLE Composicao(
	IDComposicao int primary key not null,
	itemPaiComposicao int not null,
	itemFilhoComposicao int not null,
	constraint PKMaterialPai foreign key (itemPaiComposicao ) references Materiais (IDMaterial),
	constraint PKMaterialFilho foreign key (itemFilhoComposicao) references Materiais (IDMaterial)

);

CREATE TABLE Materiais_v_Carro(
	IDm_v_c int primary key not null
);

CREATE TABLE Materiais_v_Armazem(
	IDm_v_a int primary key not null
);