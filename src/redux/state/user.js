import { createSlice } from "@reduxjs/toolkit"
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage.utility"

export const EmptyUserState = {
  id: 0,
  nombre: "",
  correo: ""
}

export const UserKey = "user"

export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage(UserKey, action.payload)
      return action.payload
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload }
      persistLocalStorage(UserKey, result)
      return result
    },
    resetUser: () => {
      clearLocalStorage(UserKey)
      return EmptyUserState
    }
  }
})

export const { createUser, updateUser, resetUser } = userSlice.actions

export default userSlice.reducer