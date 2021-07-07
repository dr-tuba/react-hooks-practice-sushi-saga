import React from 'react'

const AddMoney = ({ setNewMoney, addMoney }) => {
    function handleChange(e) {
        setNewMoney(e.target.value)
    }
    
    return (
        <div>
            <form onSubmit={addMoney}>
                <label>Add Money</label>
                <input onChange={handleChange}type='number'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default AddMoney
