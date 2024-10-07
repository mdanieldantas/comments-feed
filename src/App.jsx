import { useState } from "react"

export default function App() {
  const [comments, setComments] = useState([])
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content: content,
      createdAt: new Date() 
    }
    console.log({newComment})
    
    setComments([newComment, ...comments])
    setAuthor("")
    setContent("")
  }
  

  return (
    <div id="app">
      <h2>Seção de Comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Email</label>
        <input type="text" id="author" required 
        value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <label htmlFor="content">Comentário</label>

        <textarea id="content" cols="30" rows="6" required
        value={content} onChange={(e)=>setContent(e.target.value)}
        ></textarea>
        <button>Enviar comentário</button>
      </form>
      <hr />

      <section id="comments">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <span>Em {comment.createdAt.toLocaleString()}</span>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <p>Seja o primeiro a comentar!</p>
      )}
        <div>
          <h3>autor@email.com</h3>
          <span>Em 01/01/2001</span>
          <p>Comentário de exemplo</p>
        </div>
      </section>
    </div>
  )
}

























// import { useState } from 'react'

// export default function App() {
//   const [comments, setComments] = useState([])
//   const [author, setAuthor] = useState("")
//   const [content, setContent] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     const newComment = {
//       id: Math.floor(Math.random() * 1000000),
//       author: author,
//       content: content,
//       createdAt: new Date()
//     }

// 		setComments(state => [newComment, ...state])
//     setAuthor("")
//     setContent("")
//   }

//   return (

//     <div id="app">
//       <h2>Seção de Comentários</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="author">Email</label>
//         <input
// 					type="text" id="author" required
// 					value={author} onChange={(e) => setAuthor(e.target.value)}
// 				/>
//         <label htmlFor="content">Comentário</label>
//         <textarea
// 					id="content" cols="30" rows="5" required
// 					value={content} onChange={(e) => setContent(e.target.value)}
// 				></textarea>
//         <button>Enviar comentário</button>
//       </form>
//       <hr />
//       <section id="comments">
//       {comments.length > 0
//           ? (
//             comments.map((comment) => (
//               <div key={comment.id}>
//                 <h3>{comment.author}</h3>
//                 <span>Em {comment.createdAt.toLocaleString()}</span>
//                 <p>{comment.content}</p>
//               </div>
//             )))
//           : (
//             <p>Seja o primeiro a comentar!</p>
//           )}
//       </section>
//     </div>
//   )
// }