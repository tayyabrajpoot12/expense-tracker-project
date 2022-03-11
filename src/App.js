import MyContext from "./context/expenceContext";
import { useState } from "react";
import { TransactionProvider } from './context/expenceContext'
import Header from "./components/header/header";
import History from "./components/history/history";
import Form from "./components/transForm/form";
import './App.css'
export default () => {




  return <div>

    <TransactionProvider>
      <Header></Header>
      <History></History>
      <Form></Form>
    </TransactionProvider>





  </div>;

}
