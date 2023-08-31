![javaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white) ![node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

# API REST CRUD BIBLIOTECA.

## Código Desenvolvido para o desafio de carreira do módulo 2.

1. Listar Todos os livros.
2. Listar Livro pelo Id.
3. Adicionar livro
4. Modificar todo o livro.
5. Modificar unica propriedade do livro. 
6. Deletar livro.

## EndPoints. 

1. Para listar todos os livros. Usar o método GET
```javascript
http://localhost:3000/livros
``` 
---
2. Para listar livro pelo id. Usar o método GET. Passar o número do id que deseja ver na url.
```javascript
http://localhost:3000/livros/1
```
---
3. Para adicionar livro, Deve se passar um objeto no corpo da requisição. Usar o método POST.
```javascript
http://localhost:3000/livros/
```
**Observações:**

-   É necessário se atentar ao objeto passado, Deve seguir o seguinte formato
```javascript
{ 
	"titulo": "Vencendo na vida",
  "autor": "Guilherme Sposito",
  "ano": "2000",
  "numPaginas": "23"
}
```

---
4. Para modificar todo o livro. Deve ser usado o método PUT. E deve ser passado um objeto igual ao inserir um livro, Porém deve ser passado um id na URL
```javascript
http://localhost:3000/livros/1
```
> Com esse método você pode modificar todo o livro, menos o id.
---
5.Para modificar uma propriedade de um livro. Deve ser usado o método PATCH. E deve se passar um objeto com apenas uma propriedade no corpo da requisição. Deve ser informado o id do livro que você deseja modificar na URL. 
```javascript
http://localhost:3000/livros/1
```
**Observações:**

-   É necessário se atentar ao objeto passado, Deve seguir o seguinte formato
```javascript
{ 
	"titulo": "Vencendo na vida",
}
```
> Neste caso, modificaria apenas o título. Caso queira mudar outra propriedade, apenas passar o nome da propriedade desejada.

---
6. Para deletar um livro. Deve ser usado o método DELETE. E ser passado o id do livro a ser deletado na url.
```javascript
http://localhost:3000/livros/1
```




---

Siga o checklist para usar a API:

-   [ ] Fazer o fork do repositório para sua conta
-   [ ] Executar `git clone` do seu fork no terminal para clonar o repositório, ou clonar de outra maneira
-   [ ] Após fazer o clone, use o comando npm install. Para usar todas as ferramentas de desenvolvimento.
-   [ ] Use o comando "npm run dev" no terminal para iniciar o servidor e testar os endPoints.  

###### tags: `nodeJS` `módulo 2` 