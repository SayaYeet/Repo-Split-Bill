import { useState, useEffect } from "react";
import friendsJSON from "./friends.json";
import FriendList from "./components/FriendList";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";

function App() {
  const [friends, setFriends] = useState(() => {
    const storedFriends = localStorage.getItem("friends");
    return storedFriends ? JSON.parse(storedFriends) : friendsJSON;
  });

  function onRemoveFriend(id) {
    const friendToRemove = friends.find(friend => friend.id === id);
    setFriends((friends) => friends.filter(friend => friend.id !== id));
    if (selectedFriend?.id === id) {
      setSelectedFriend(null);
    }

    if(friendToRemove){
      alert(`${friendToRemove.name} telah di remove dari grub keluarga`)
    }
  }  
  
  const [selectedFriend, setSelectedFriend] = useState(null);
  const[showAddFriend, setShowAddFriend] = useState(false);

  function onSelectedFriend(friend) {
    setSelectedFriend( selectedFriend =>
      selectedFriend?.id === friend.id ? null : friend
    );
    console.log(friend);
  }

  // Save into local-storage
  useEffect(()=>{

    localStorage.setItem("friends", JSON.stringify(friends));
    console.log("friends saved..");

  }, [friends])

  function handleSplitBill(value) {
    setFriends(
      friends.map((friend) => {
        if (friend.id === selectedFriend?.id) {
          return {
            ...friend,
            balance: friend.balance + value,
          };
        }
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  function handleShowAddFriend(){
    setShowAddFriend((show) => !show);
  };

  function onAddNewFriend(friend){
    setFriends((friends) => [...friends, friend]);
  };



  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            friends={friends}
            onSelectedFriend={onSelectedFriend}
            selectedFriend={selectedFriend}
            onRemoveFriend={onRemoveFriend}
          />

          <button className="button" onClick={handleShowAddFriend}>
            tambah teman
          </button>

        </div>

        {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
        )}

      </div>

      {showAddFriend && (
        <FormAddFriend
        onAddNewFriend={onAddNewFriend}
        onClose={handleShowAddFriend}
        />
      )}
    </>
  )
}

export default App
