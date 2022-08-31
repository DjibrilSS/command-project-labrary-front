import React from "react";
import avatar from "../components/dSxCxs3Vgzk.jpg";
import styles from "../components/user.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchUsers, returnbook } from "../feauters/userSlice";

const UserPage = () => {
  const users = useSelector((state) => state.user.users);
  const id = useSelector((state) => state.application.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = (idbook) => {
    dispatch(returnbook({ id, idbook }));
    dispatch(fetchUsers());
  };

  return users.map((item) => {
    if (item._id === id) {
      return (
        <div className={styles.userpage}>
          <div className={styles.user_img}>
            <h2>{item.login}</h2>
            <img src={avatar} alt="" />
          </div>
          <div className={styles.user_text}>
            <div>
              {item.rent.map((i) => {
                return (
                  <div className={styles.rent_list}>
                    <div className={styles.userBookCard}>
                      <div className={styles.userBookImg}>
                        <img
                          src={`http://localhost:4000/images/${i.img}`}
                          alt=""
                        />
                        <div>
                          {" "}
                          <h4>{i.name}</h4>
                        </div>
                      </div>

                      <div className={styles.userBookBtn}>
                        <button onClick={() => handleClick(i._id)}>X</button>
                      </div>
                    </div>
                    <a href={`http://localhost:4000/pdf/${i.pdf}`}>
                      <button className={styles.read_btn}>читать</button>
                    </a>
                    <a href={`http://localhost:4000/fb2/${i.fb2}`}>
                      <button className={styles.read_btn}>скачать</button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  });
};

export default UserPage;
