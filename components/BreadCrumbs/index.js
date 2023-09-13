import React from "react";
import Link from "next/link";

import styles from "./breadCrumbs.module.scss";

export default function BreadCrumbs({ array }) {
    return (
        <div>
            < div className={styles.breadCrumbs} >
                <div>
                    <Link className={styles.breadCrumbsItem} href="/">главная</Link>

                    {!Array.isArray(array) &&
                        <Link className={styles.breadCrumbsItem} href={array.url}>{array.name}</Link>
                    }

                    {Array.isArray(array) && array.map((item, index) => {
                        if (item.url) {
                            return (
                                <Link className={`${styles.breadCrumbsItem} ${styles.noLink}`} key={index} href={item.url}>{item.name}</Link>
                            )
                        } else {
                            <span className={`${styles.breadCrumbsItem} ${styles.noLink}`} key={index}>{item.name}</span>
                        }
                    })}

                </div>
            </div >
        </div>
    );
}