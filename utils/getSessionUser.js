import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/utils/authOptions'

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions)

  // create a mock user object if there is no session
  const mockUser = {
    id: '66e72737ee0720efff50492f',
    name: 'John Doe',
    email: 'johndoe@gmail.com',
  }

  // create a mock session object if there is no session
  if (!session) {
    return {
      user: mockUser,
      userId: mockUser.id,
    }
  }

  // if (!session || !session.user) {
  //   return null
  // }

  return {
    user: session.user,
    userId: session.user.id,
  }
}
