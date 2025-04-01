import { FC, useEffect } from 'react'
import ClientProfile from '../../interfaces/ClientProfile'
import useGetData from '../../hooks/useGetData'
import Table from '../table/Table'

interface ClientsProps {

}

const Clients: FC<ClientsProps> = ({ }) => {
  const initalVal: ClientProfile[] = []
  const { getData: getClients, data: clients, isLoading } = useGetData('/client/get-clients', initalVal)



  useEffect(() => {
    getClients()
  }, [])

  if (isLoading) {
    return 'loading...'
  }

  if (!clients.length) {
    return 'no sale transactions!'
  }

  return (
    <Table columns={['clientName', 'phone']} rows={clients} />
  )
}

export default Clients;