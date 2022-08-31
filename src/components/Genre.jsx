import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenre } from "../feauters/genreSlice";
import styles from './styles/genre.module.css'


const Genre = () => {
  const dispatch = useDispatch();

  const genre = useSelector((state) => state.genre.genre);

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <div className={styles.genreDiv}>
      {genre.map((item) => {
        return (
          <Link to={`/genre/${item._id}`}>
            <div key={item._id}>
              <ul>
                <li>{item.nameGenre}</li>
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Genre;
