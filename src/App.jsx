// Importa o hook useState da biblioteca React, que permite gerenciar o estado em componentes funcionais.
import { useState } from "react"

// Define o componente principal da aplicação.
export default function App() {
  // Declara um estado 'comments', que é um array para armazenar os comentários. 'setComments' é a função para atualizá-lo.
  const [comments, setComments] = useState([])
  // Declara um estado 'author' para armazenar o autor do comentário.
  const [author, setAuthor] = useState("")
  // Declara um estado 'content' para armazenar o conteúdo do comentário.
  const [content, setContent] = useState("")

  // Função para lidar com o envio do formulário.
  const handleSubmit = (e) => {
    // Evita o comportamento padrão de recarregar a página ao enviar o formulário.
    e.preventDefault()

    // Cria um novo comentário com um ID aleatório, autor, conteúdo e data de criação.
    const newComment = {
      id: Math.floor(Math.random() * 1000000), // Gera um ID único para o comentário.
      author: author, // Armazena o autor do comentário.
      content: content, // Armazena o conteúdo do comentário.
      createdAt: new Date() // Armazena a data e hora atuais como a data de criação do comentário.
    }
    console.log({newComment}) // Exibe o novo comentário no console para depuração.
    
    // Atualiza o estado 'comments' para adicionar o novo comentário no início da lista.
    setComments([newComment, ...comments])
    // Limpa os campos de entrada de autor e conteúdo após o envio.
    setAuthor("")
    setContent("")
  }
  
  // Renderiza o componente.
  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      {/* Formulário para submissão de comentários */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o autor do comentário */}
        <label htmlFor="author">Email</label>
        <input 
          type="text" 
          id="author" 
          required 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} // Atualiza o estado 'author' conforme o valor do campo muda.
        />
        {/* Campo de entrada para o conteúdo do comentário */}
        <label htmlFor="content">Comentário</label>
        <textarea 
          id="content" 
          cols="30" 
          rows="6" 
          required 
          value={content} 
          onChange={(e) => setContent(e.target.value)} // Atualiza o estado 'content' conforme o valor do campo muda.
        ></textarea>
        {/* Botão de envio do formulário */}
        <button>Enviar comentário</button>
      </form>
      <hr />

      {/* Seção onde os comentários são exibidos */}
      <section id="comments">
      {/* Verifica se há comentários no estado 'comments'. */}
      {comments.length > 0 ? (
        // Mapeia cada comentário para um elemento JSX.
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <span>Em {comment.createdAt.toLocaleString()}</span>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        // Caso não haja comentários, exibe esta mensagem.
        <p>Seja o primeiro a comentar!</p>
      )}
        {/* Exemplo de um comentário fixo */}
        <div>
          <h3>autor@email.com</h3>
          <span>Em 01/01/2001</span>
          <p>Comentário de exemplo</p>
        </div>
      </section>
    </div>
  )
}
