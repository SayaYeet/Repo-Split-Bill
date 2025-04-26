import FriendCard from "../FriendCard";

export default function FriendList({ friends, onSelectedFriend, selectedFriend, onRemoveFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <FriendCard
          friend={friend}
          key={index}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          onRemoveFriend={onRemoveFriend}
        />
      ))}
    </ul>
  );
}
