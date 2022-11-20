

import './App.css';
import React, { useEffect, useState } from "react";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import Cont from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./Components/Login";
import Loading from "./Components/Loading";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;

  return (
    <Cont.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </Cont.Container>
  );
};

export default App;
