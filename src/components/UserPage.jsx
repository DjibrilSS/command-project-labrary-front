import React from "react";
import axios from "axios"
import avatar from "../components/dSxCxs3Vgzk.jpg";
import styles from "../components/user.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { fetchUsers, patchavatar, returnbook } from "../feauters/userSlice";
import { useState } from "react";

const UserPage = () => {
  const users = useSelector((state) => state.user.users);
  const id = useSelector((state)=> state.application.id)

  const [img, setImg] = useState(null);
  const [file, setfile] = useState();
  const [avatar1, setAvatar1] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = (idbook)=>{
    dispatch(returnbook({id,idbook}))
    dispatch(fetchUsers())
    
  }

  

  const sendFile = React.useCallback(async (e) => {
    
    e.preventDefault()
    try {
      const data = new FormData();
      data.append("avatar", img);

      await axios
        .post("/api/upload", data, {
          headers: {
            "content-type": "mulpipart/form-data",
          },
        })

        .then((res) => {
          setAvatar1(res.data.path);

          setfile(res.data.originalname);
          dispatch(patchavatar({id,file}))
        });
       
       
    } catch (error) {}
  }, [img]);


  return users.map((item) => {
    if (item._id === id) {
      return (
        <div className={styles.userpage}>
          <div className={styles.user_img}>
            {avatar1 ? <img src={`${avatar1}`} alt="" /> 
            :
            <img src={`http://localhost:4000/images/${item.avatar}`} alt="" />}
            <input onChange={(e)=> setImg(e.target.files[0])} type="file" />
                   <button onClick={sendFile}>Загрузить  Аватар</button>
                   <button onClick={()=>dispatch(patchavatar({id,file}))}>Применить</button>
          </div>
          <div className={styles.user_text}>
            <h2>{item.login}</h2>
            <div >{item.rent.map((i)=>{
                return(
                    <>
                   <div className={styles.userBookCard}> 
                <div className={styles.userBookImg}>
                   <img src={`http://localhost:4000/images/${i.img}`} alt="" />
              
                   
                   
                   <div> <h4>{i.name}</h4></div>
                </div>
                
                <div className={styles.userBookBtn}>
                    <button onClick={()=> handleClick(i._id)}>X</button>
                </div>
                </div> 
               
                </>
                )
            })}</div>
          </div>
        </div>
      );
    }
  });
};

export default UserPage;
