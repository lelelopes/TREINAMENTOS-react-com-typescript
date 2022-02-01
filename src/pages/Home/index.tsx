import { Button } from '../../components/Button'

import { useAuth } from '../../contexts/AuthContext'

export const Home = () => {
  const { user, signInWithGoogle } = useAuth()

  async function signIn() {
    await signInWithGoogle()
  }

  if (user !== undefined) {
    console.log(user)
  }

  return <Button onClick={signIn}>Fazer login com o Google</Button>
}
