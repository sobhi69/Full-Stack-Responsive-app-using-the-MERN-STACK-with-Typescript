import { FC } from 'react'
import './table.css'
interface TableProps {
    columns: string[],
    rows: any[]
}
const Table: FC<TableProps> = ({ columns, rows }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    {columns.map((str, index) => (
                        <th key={index}> {str}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        {columns.map((str, index) => (
                            <td key={index}>{row[str]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;