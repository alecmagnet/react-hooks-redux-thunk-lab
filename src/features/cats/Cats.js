import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCats } from './catsSlice'
import CatList from "./CatList";

function Cats() {
  useEffect(() => {
    dispatch(fetchCats())
  }, [])

  const catPics = useSelector((state) => state.entities)
  const status = useSelector((state) => state.status)
  const dispatch = useDispatch()
  

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      {/* {status === "idle" ? */}
        <CatList catPics={catPics} />
      {/* : <h3>Loading...</h3>} */}
    </div>
  );
}

export default Cats;
