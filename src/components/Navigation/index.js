import React from "react"
import { useUser } from "../../store"
import WithUser from "./withUser"
import WithNonUser from "./withNonUser"

const Navigation = () => {
  const user = useUser()

  if (!user) {
    return <WithNonUser />
  }
  return <WithUser />
}

export default Navigation
