import { useContext } from "react"
import myContext from "../../context/expenceContext";





export default () => {


    const {transaction}  = useContext(myContext)

        let income = 0;
        let expence = 0;
    let balance = transaction.filter((transaction)=>{
        
            if(transaction.amount>0){
                income += +transaction.amount;
            }else{
                expence += +transaction.amount;
            }

    })

    return <div className='container'>
        <h2>Expence Tracker By Me</h2>
        <h4>CURRUNT BALENCE</h4>
        <h1>${income+expence}</h1>

    
        <div className='incomeContainer'>
            <div className='income'>
                <h3>INCOME </h3><br /> <h3 className='incomeAmount'>${income}</h3>
            </div>
            <hr />
            <div>
                <h3 className='expence'>EXPENCE </h3><br /> <h3 className='expenceAmount'>${expence}</h3>
            </div>
        </div>



    </div>
}