import { useState } from "react";

function FormSplitBill({selectedFriend, handleSplitBill}){
    const [amount, setAmount] = useState(0);
    const [myBill, setMyBill] = useState(0);
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const friendBill = amount ? amount - myBill : 0;
    
    function handleSubmit(e){
        e.preventDefault();
        if (!amount || !myBill) return;
        handleSplitBill(whoIsPaying === "user" ? friendBill : -myBill);
    }

    return(
        <>
        <form action="" className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Bayar bersama dengan {selectedFriend.name}</h2>

            <label htmlFor="totalTagihan">Total Tagihan</label>
            <input
            type="text"
            id="totalTagihan"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />

            <label htmlFor="tagihanKamu">Tagihan Kamu</label>
            <input
            type="text"
            id="tagihanKamu"
            value={myBill}
            onChange={(e) => setMyBill(e.target.value)}
            />

            <label htmlFor="tagihan">{selectedFriend.name} Tagihan</label>
            <input type="text" id="tagihan" disabled value={friendBill}/>

            <label htmlFor="opsiTagihan">Bebas Tagihan</label>
            <select id="opsiTagihan"
                value={whoIsPaying}
                onChange={(e) => setWhoIsPaying(e.target.value)}>
                <option value="user">Kamu</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">add</button>
        </form>
        </>
    )
}

export default FormSplitBill;
