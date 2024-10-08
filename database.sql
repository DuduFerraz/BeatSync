CREATE DATABASE BeatSync;

USE BeatSync;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(35) NOT NULL,
    email VARCHAR(35) NOT NULL,
    dataNasc DATE,
    genero VARCHAR(35) NOT NULL,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE treino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(35) NOT NULL,
    descricao VARCHAR(35) NOT NULL
);

CREATE TABLE musics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(500) NOT NULL,
    gender VARCHAR(500) NOT NULL,
    artist VARCHAR(500) NOT NULL,
    album VARCHAR(500) NOT NULL,
    link_url VARCHAR(500)
);
