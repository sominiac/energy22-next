import Image from "next/image";

import SupFooterImage from "@images/sup-footer-image.png";

import styles from "./_styles/supFooter.module.scss";

const SupFooter = () => {
  return (
    <section className={styles.supFooter}>
      <Image
        className={styles.supFooter__image}
        src={SupFooterImage}
        alt="energy22"
      />
    </section>
  );
};

export default SupFooter;
