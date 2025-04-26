function FriendCard({ friend, onSelectedFriend, selectedFriend, onRemoveFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>

            {friend.balance < 0 && (
                <p className="red">
                    kamu berhutang ${Math.abs(friend.balance)} kepada {friend.name} teman
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} teman mu berhutang ${Math.abs(friend.balance)} kepada kamu
                </p>
            )}
            {friend.balance === 0 && (
                <p>kamu dan {friend.name} teman tidak ada hutang</p>
            )}

            <button className="button" onClick={() => onSelectedFriend(friend)}>
                {isSelected ? "cancel" : "choose"}
            </button>

            <button className="button-remove" onClick={() => onRemoveFriend(friend.id)}>
                remove
            </button>
        </li>
    );
}

export default FriendCard;
