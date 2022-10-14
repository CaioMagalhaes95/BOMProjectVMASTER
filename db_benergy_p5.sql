
drop database if exists bd_benergy_p5;
CREATE DATABASE BD_BENERGY_P5;

USE BD_BENERGY_P5;


CREATE TABLE Materiais(
	IDMaterial int primary key not null auto_increment,
    matNome varchar(255),
    matDesc varchar(255),
    matData datetime,
    matquant int,
    matSist varchar(255),
    matMassa int,
    matCusto int,
    matUnidade int,
    matcomp varchar(255)

);


CREATE TABLE Carros(
	IDCarro int primary key not null,
	descricaoCarro varchar(100)

);

CREATE TABLE Armazemm(
	IDArmazem int primary key not null,
	Prateleira varchar(30)

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

select * from Materiais;