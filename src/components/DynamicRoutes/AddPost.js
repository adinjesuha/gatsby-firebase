import React, { useState } from "react"
import { db } from "../../services/firebase"

const AddPost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const onSubmit = e => {
    e.preventDefault()
    db.collection("posts")
      .add({
        title,
        body,
      })
      .then(() => {
        setTitle("")
        setBody("")
      })
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Add title content</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <label>Add body content</label>
        <input
          type="text"
          value={body}
          onChange={e => setBody(e.currentTarget.value)}
        />
      </div>
      <button>Create</button>
    </form>
  )
}

export default AddPost
