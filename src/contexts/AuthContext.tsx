import { createContext, useState, ReactNode, useContext } from 'react'

interface User {
  id: string
  name: string
  avatar: string
}

// tipamos os valores que serão retornandos pelo context
interface AuthContextValues {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextValues)

export type AuthContextProviderProps = {
  // tipamos o children do provider
  children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  // tipamos o useState
  const [user, setUser] = useState<User>()

  function loadUserData() {
    const displayName = 'Leandro Lopes'
    const photoURL =
      'https://lh3.googleusercontent.com/ogw/ADea4I7Xp-bD2YtTeMGU796LksLmSOk4bPEiHuKQXd24lQ=s32-c-mo'
    const id = new Date().getTime()

    const user = {
      displayName,
      photoURL,
      id,
    }

    return {
      user,
    }
  }

  async function signInWithGoogle() {
    const result = await loadUserData()

    if (result.user) {
      const { displayName, photoURL, id } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.')
      }

      setUser({
        // transformamos o valor em uma string
        // podemos fazer isso com qualquer tipo primitivo
        // para transformar em um boolean, faríamos Boolean(id)
        id: String(id),
        name: displayName,
        avatar: photoURL,
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const value = useContext(AuthContext)

  return value
}
