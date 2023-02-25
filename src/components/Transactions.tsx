import '../styles/Transactions.css'

const TransactionsList = [
    {
        company:'Uber Taxi',
        date:'02-13-2012',
        amount:948.55
    },
    {
        company:'AT&T',
        date:'02-14-2012',
        amount:19.99
    },    
    {
        company:'Ebay',
        date:'02-18-2012',
        amount:98.55
    },
    {
        company:'Ebay',
        date:'02-19-2012',
        amount:45.50
    },
    {
        company:'Air BnB',
        date:'02-22-2012',
        amount:-120.00
    },
    {
        company:'Direct Energy',
        date:'02-23-2012',
        amount:-60.00
    },
    {
        company:'Ebay',
        date:'02-26-2012',
        amount:70.25
    },
]

const formatAmount = (amount : number) : string => {
    return amount >= 0 ? '$'+amount.toFixed(2) : '-$'+amount.toFixed(2).toString().slice(1)
}


const Transactions = () => {

    return (
        <div className="transactionsContainer">
            <h2 className="transactionsTitle">Last Transactions</h2>
            {TransactionsList.map((transac, index) => 
            <Transaction 
                key={'transac'+index} 
                company={transac.company.toUpperCase()} 
                date={transac.date} 
                amount={formatAmount(transac.amount)}/>)}
        </div>
      )
}

interface TransactionType {
    company: string;
    date: string;
    amount: string;
}

const Transaction = ({company, date, amount} : TransactionType) => {
    return(
        <article className="oneTransactionContainer">
            <div className='transactionDatas'>
                <div className='transactionRecipient'>{company}</div>
                <div className='datenAmountContainer'>
                    <span className='transactionDate'>{date}</span><span className={amount[0]!=='-' ? 'transactionAmount' : 'transactionAmountRed'}>{amount}</span>
                </div>
                <div className='transactionDashes'></div>
            </div>
            <div className='transactionArrow'>
            &gt;
            </div>
        </article>
    )
}

export default Transactions