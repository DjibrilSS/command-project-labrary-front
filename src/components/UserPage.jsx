import React from 'react';
import avatar from "../components/dSxCxs3Vgzk.jpg"
import styles from "../components/user.module.css"
const UserPage = () => {
    return (
        <div className={styles.userpage}>
            <div className={styles.user_img}>
                <img src={avatar} alt="" />
            </div>
            <div className={styles.user_text}>
                <h2>Ислам Бугазов</h2>
                <h4>Выбранные книги:</h4>
            </div>
        </div>
    );
};

export default UserPage;