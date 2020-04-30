import React from "react";
import styles from "../../styles/modules/linkicon.module.scss";

const LinkIcon = () => {

    return (

        <div className={styles.link_icon}>

            <svg role="img" viewBox="0 0 38 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <title>Link anchor icon</title>
                <path d="M3.61 9.5C3.61 6.251 6.251 3.61 9.5 3.61H17.1V0H9.5C4.256 0 0 4.256 0 9.5C0 14.744 4.256 19 9.5 19H17.1V15.39H9.5C6.251 15.39 3.61 12.749 3.61 9.5ZM11.4 11.4H26.6V7.6H11.4V11.4ZM28.5 0H20.9V3.61H28.5C31.749 3.61 34.39 6.251 34.39 9.5C34.39 12.749 31.749 15.39 28.5 15.39H20.9V19H28.5C33.744 19 38 14.744 38 9.5C38 4.256 33.744 0 28.5 0Z" fill="#FE5862"/>
            </svg>

        </div>

)};

export default LinkIcon;