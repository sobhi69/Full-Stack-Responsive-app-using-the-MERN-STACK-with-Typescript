import { FC } from 'react'
import { formatDate } from '../../utils/helpers'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import { TiDelete } from 'react-icons/ti'
import Table from '../table/Table'
import Sale from '../../interfaces/Sale'

interface SaleBoxProps {
    sale: Sale,
    // deleteSale: (id: string) => void,
    toggleShowInfo: (id: string) => void
}


const SaleBox: FC<SaleBoxProps> = ({ sale, toggleShowInfo }) => {
    return (
        <div className='sale-box'>
            <div>Date : {formatDate(sale.createdAt)}</div>
            <div className="sales-person-div">Sales Person :{sale?.salesPerson || 'unkown'}</div>
            <div>Client: {sale.client || 'unkown'}</div>
            {!sale.showInfo ? (
                <div className='d-f-sb'>
                    <span className='d-f-c'>Show Info
                        <IoMdArrowDropdown
                            className='arrow-down-icon arrow-icon'
                            onClick={() => toggleShowInfo(sale._id)}
                        /></span>
                    <button
                        className='d-f-c cur-p'
                    // onClick={(delete)}
                    >delete <TiDelete /></button>
                </div>
            ) : (
                <div className="info">
                    <span className='d-f-c'>Hide Info <IoMdArrowDropup
                        className='arrow-up-icon arrow-icon'
                        onClick={() => toggleShowInfo(sale._id)} />
                    </span>
                    <h4>items : </h4>
                    <Table columns={['title', 'cost', 'minPrice', 'category', 'price', 'quantity']} rows={sale.cardItems} />
                    <h4>Original Total : {sale.total}</h4>
                    <h4>Discount : {sale.discount}</h4>
                    <h4>Addition : {sale.addition}</h4>
                    <h4>Total : {sale.total - (sale.discount || 0) + (sale.addition || 0)}</h4>
                </div>
            )}
        </div>
    )
}

export default SaleBox;