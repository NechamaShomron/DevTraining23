import React, { useState } from 'react';
import Image from 'next/image';
import styles from './day1b.module.css';

export default function Day1b() {
  const [showMobile, setShowMobile] = useState(false);
  const numOfImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  function toggleMobileView() {
    setShowMobile(!showMobile);
  }
  function closeMobileView(e) {
    setShowMobile(false);
    e.stopPropagation();
  }
  return (
    <>
      <nav className={styles.navbar}>
        <a className={styles.navbar_title} href="/day1b">Renaissance Gallery.</a>
        <ul className={showMobile ? `${styles.navbar_menu} ${styles.active}` : styles.navbar_menu}>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="/day1b" className={styles.navbar_link}>Home</a>
          </li>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="#about" className={styles.navbar_link}>About</a>
          </li>
          <li className={styles.navbar_item} role="presentation" onClick={toggleMobileView}>
            <a href="#contact" className={styles.navbar_link}>Contact</a>
          </li>
        </ul>
        <div
          role="presentation"
          className={styles.hamburger_container}
          onClick={toggleMobileView}
        >
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
          <span className={showMobile ? `${styles.hamburger_bar} ${styles.active}` : styles.hamburger_bar} />
        </div>
      </nav>
      <div className={styles.hero_section_container} role="presentation" onClick={(e) => closeMobileView(e)}>
        <div>
          <h1 className={styles.hero_section_title}>Learn about the renaissance! </h1>
          <p className={styles.hero_section_text} role="presentation">The Renaissance is a period in European history marking the transition from the Middle Ages to modernity and covering the 15th and 16th centuries, characterized by an effort to revive and surpass ideas and achievements of classical antiquity.</p>
        </div>
        <Image
          className={styles.hero_image}
          src="/assets/renaissance_art/hero_image.jpg"
          alt="Picture of the renaissance"
          width={300}
          height={300}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.gallery_title}>Gallery</h1>
        <ul className={styles.images_list}>
          {numOfImages.map((number) => (
            <li key={number} className={styles.image_item}>
              <Image
                className={styles.image}
                src={`/assets/renaissance_art/image${number}.jpg`}
                alt={`Picture ${number} of renaissance`}
                width={300}
                height={300}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
