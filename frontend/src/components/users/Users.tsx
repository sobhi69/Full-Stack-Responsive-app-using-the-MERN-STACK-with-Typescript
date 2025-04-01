import { FC, useEffect } from 'react'
import Table from '../table/Table';
import useGetData from '../../hooks/useGetData';
import UserProfile from '../../interfaces/UserProfile';

interface UsersProps {

}

const Users: FC<UsersProps> = ({ }) => {
  const initalVal: UserProfile[] = []
  const { getData: getUsers, data: users,isLoading } = useGetData('/user/get-users', initalVal)


  useEffect(() => {
    getUsers()
  }, [])

  if(isLoading) {
    return 'loading...'
  }

  if (!users.length) {
    return 'no sale transactions!'
  }

  return (
    <div>
      <Table columns={['username', 'phone']} rows={users} />
    </div>
  )
}

export default Users;