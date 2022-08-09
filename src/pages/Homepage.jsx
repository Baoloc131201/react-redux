import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HobbyList from "../components/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
// Homepage.protoTypes = {};
const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
const Homepage = (props) => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  console.log(hobbyList);
  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Huỳnh Bảo Lộc ${newId}`,
    };
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handlHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="home-page">
      <h1>Redux Hooks- Home page Hobby</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handlHobbyClick}
      />
    </div>
  );
};

export default Homepage;
