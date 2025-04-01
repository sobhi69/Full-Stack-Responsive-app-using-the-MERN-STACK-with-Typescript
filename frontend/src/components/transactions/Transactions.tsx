import { FC, useEffect} from 'react'
import useGetData from '../../hooks/useGetData'
import './transactions.css'
import SaleBox from './SaleBox'
import Sale from '../../interfaces/Sale'
interface TransactionsProps {

}



const Transactions: FC<TransactionsProps> = ({ }) => {

  const initalVal: Sale[] = []

  const {
    getData: getSales,
    data: sales,
    setData: setSales,
    isLoading
  } = useGetData('/sale/get-sales', initalVal)

  useEffect(() => {
    getSales()

  }, [])



  const toggleShowInfo = (id: string) => {
    const updatedSales = sales.map(sale => {
      if (sale._id == id) {
        return { ...sale, showInfo: !sale.showInfo }
      } else {
        return sale
      }
    })

    setSales(updatedSales)
  }

  if (isLoading) {
    return 'loading...'
  }

  if (!sales.length) {
    return 'no sale transactions!'
  }

  return (
    <div className='transactions'>
      {/* <div>Revenue</div> */}
      {sales.map((sale, index) => (
        <SaleBox key={index} sale={sale} toggleShowInfo={toggleShowInfo} />
      ))}
    </div>
  )
}



export default Transactions;