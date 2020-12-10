import React from 'react'

export default function CurrenyCrow({ 
    currencyOptions, 
    selectedCurrency, 
    onChangeCurrency, 
    onChangeAmount, 
    amount 
}) {
    return (
        <div>
            <input 
                type="number" 
                className="input" 
                value={amount} 
                onChange={onChangeAmount} 
            />
            <select 
                value={selectedCurrency} 
                onChange={onChangeCurrency}
            >
                {
                    currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}