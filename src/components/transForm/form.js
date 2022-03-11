import { useState } from "react"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import myContext from "../../context/expenceContext";
export default () => {


    let { register, handleSubmit } = useForm();

    const {addTransaction} = useContext(myContext);

    const transSubmit = (data) => {
        

        addTransaction(data);

    }


    return <div>
        <form className='submit' onSubmit={(handleSubmit(transSubmit))}>
            <h3>Descriction</h3>
            <input className='data' {...register('desc', { required: true })} type="text" placeholder='Detail of transaction' />
            <h3>Transaction</h3>
            <input className='data' {...register('amount', { required: true })} type="number" placeholder='Dollor Value of Transaction' />
            <br />
            <button className='BTN'>Add Transaction</button>
        </form>
    </div>
}