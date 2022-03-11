import { useContext } from "react"
import myContext from "../../context/expenceContext"




export default () => {



    const {deleteList} = useContext(myContext);
    const {transaction}  = useContext(myContext)

    const deleteTransaction = (index)=>{

        deleteList(index);
        transaction.splice(index ,1)
    }


    return <div className='transactionBox'>
        <h3>Transaction History</h3>
        <hr />
        <ul>
            {
                transaction.map((trans, index) => {
                    return <li key={index} className='list'>
                        <button className='dlt' onClick={()=>{deleteTransaction(trans,index)}}>X</button>
                        <span className='descTd'>{trans.desc}</span>
                        <span className='amountTd'>${trans.amount}</span>
                    </li>
                })
            }
        </ul>
        <h3>Add New Transaction</h3>
        <hr />
    </div>
}