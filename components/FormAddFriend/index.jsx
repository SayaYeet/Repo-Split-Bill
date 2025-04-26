import { useState } from "react";
import './style.css';

export default function formAddFriend({ onAddNewFriend, onClose }) {
    const [name, setName] = useState("");
    const defaultImgUrl = "https://i.pravatar.cc/48/";
    const [imageUrl, setImageUrl] = useState(defaultImgUrl);
    
    function handleSubmit(e){
        e.preventDefault();
        if (!name || !imageUrl) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${imageUrl}?=${id}`,
            balance: 0,
        };

        onAddNewFriend(newFriend);
        setName("");
        setImageUrl(defaultImgUrl);
        onClose();
    };
    
    return(
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">add friend</h2>
                <form className="form-add-friend" onSubmit={handleSubmit}>
                    <label htmlFor="name">Profile</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <label htmlFor="imageUrl">Gambar</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />

                    <div className="modal-actions">
                        <button type="submit" className="button">
                            Add
                        </button>
                        <button type="button" className="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
