import React, { useState, useEffect } from "react"
import { db } from "../../services/firebase"

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot(snapshot => {
      const posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPosts(posts)
    })
    return () => unsubscribe()
  }, [])
  return (
    <div>
      <h1>Home Page!!</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
