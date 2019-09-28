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
  return posts.length ? (
    <div>
      <h1>Posts from firestore</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  ) : (
    <h3>Lading..</h3>
  )
}

export default Home
