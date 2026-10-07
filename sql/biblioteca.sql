create database biblioteca_dom;
use biblioteca_dom;

create table livros(
id INT AUTO_INCREMENT PRIMARy KEY,
titulo varchar(150) not null,
autor  varchar(100) not null,
ano int not null
);

insert into livros(titulo,autor,ano) 
values('Dom Casmurro', 'Machado de assis', 1899),
('O hobbit', 'J.R. R. Tolkien', 1937),
('1984', 'George Orwell', 1950)