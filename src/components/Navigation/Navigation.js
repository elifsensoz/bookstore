import React from 'react'
import styles from './Navigation.module.scss'

export default function Navigation() {
  return (
    <>
    <div class={styles.navigationBar}>
                <div class={styles.basket}>
                    <img src="assets/navigation/Basket.svg" alt="" class={styles.basketIcon}/>
                    <div class={styles.basketText}>Basket</div>
                </div>
                <div class={styles.search}>
                    <img class={styles.searchIcon} alt="search" src="assets/navigation/Search Icon.svg" />
                    <div class={styles.searchText}>What are you looking for ? </div>
                </div>
                <div class={styles.menu}>
                    <img src="assets/navigation/Menu.svg" alt="Menu" class={styles.menuIcon}/>
                </div>
                <div class={styles.favorite}>
                    <img src="assets/navigation/Favorite.svg" alt="Favorite" class={styles.favoriteIcon}/>
                </div>
                <div class={styles.account}>
                    <img src="assets/navigation/Account.svg" alt="Account" class={styles.accountIcon}/>
                </div>
            </div>
    </>
  )
}
