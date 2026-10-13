import { type ReactElement, useState } from "react";
import Image from "next/image";

import Section from "@components/layout/Section";
import Modal from "@components/ui/Modal";
import { ESections } from "@/constants/sections";

import ListImage1 from "@images/projects/1.png";
import ListImage2 from "@images/projects/2.png";
import ListImage3 from "@images/projects/3.png";
import ListImage4 from "@images/projects/4.png";
import ListImage5 from "@images/projects/5.png";
import ListImage6 from "@images/projects/6.png";
import ListImage7 from "@images/projects/7.png";
import ListImage8 from "@images/projects/8.png";

import styles from "./_styles/projects.module.scss";

const PROJECTS_LIST = [
  {
    id: "0",
    image: ListImage1,
    altText: "image",
  },
  {
    id: "1",
    image: ListImage2,
    altText: "image",
  },
  {
    id: "2",
    image: ListImage3,
    altText: "image",
    isVerticalView: true,
  },
  {
    id: "3",
    image: ListImage4,
    altText: "image",
  },
  {
    id: "4",
    image: ListImage5,
    altText: "image",
  },
  {
    id: "5",
    image: ListImage6,
    altText: "image",
  },
  {
    id: "6",
    image: ListImage7,
    altText: "image",
  },
  {
    id: "7",
    image: ListImage8,
    altText: "image",
    isVerticalView: true,
  },
];

const Projects = () => {
  const [modalContent, setModalContent] = useState<ReactElement>(<></>);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerticalView, setIsVerticalView] = useState(false);

  const onOpen = (content: ReactElement, isVerticalView = false) => {
    setModalContent(content);
    setIsVerticalView(isVerticalView);
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Section
      classNameSection={styles.projects}
      classNameInner={styles.projects__inner}
      id={ESections.PROJECTS}
      title="Галерея"
    >
      <ul className={styles.projects__list}>
        {PROJECTS_LIST.map(({ id, image, isVerticalView, altText }) => (
          <li
            key={id}
            className={styles.projects__item}
            onClick={() =>
              onOpen(<Image src={image} alt={altText} />, isVerticalView)
            }
          >
            <Image
              className={styles.projects__itemImage}
              src={image}
              alt={altText}
            />
          </li>
        ))}
      </ul>
      <Modal isOpen={isOpen} onClose={onClose} isVerticalView={isVerticalView}>
        {modalContent}
      </Modal>
    </Section>
  );
};

export default Projects;
