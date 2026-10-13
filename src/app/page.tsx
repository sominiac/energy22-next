"use client";

import { useEffect, useRef, useState } from "react";

import NotificationProvider from "@/stores/providers/NotificationProvider";
import Container from "@components/layout/Container";
import Header from "@components/ui/Header";
import Tags from "@components/ui/Tags";
import UpButton from "@components/ui/UpButton";
import Footer from "@components/ui/Footer";
import NotificationModal from "@components/ui/NotificationModal";

import Welcome from "@/app/(Welcome)";
import About from "@/app/(About)";
import Mission from "@/app/(Mission)";
import Projects from "@/app/(Projects)";
import Services from "@/app/(Services)";
import Advantages from "@/app/(Advantages)";
import Stages from "@/app/(Stages)";
import Info from "@/app/(Info)";
import FAQ from "@/app/(FAQ)";
import SupFooter from "@/app/(SupFooter)";

import styles from "./_styles/app.module.scss";

export default function Home() {
  const [isUpButtonVisible, setIsUpButtonVisible] = useState(false);

  const arrowUpContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const arrowUpContainerElem = arrowUpContainer?.current;
    const onScroll = () => {
      if (arrowUpContainerElem) {
        if (
          window.pageYOffset > arrowUpContainerElem.getBoundingClientRect().top
        ) {
          setIsUpButtonVisible(true);
        } else {
          setIsUpButtonVisible(false);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <NotificationProvider>
      <Container>
        <Header />
        <Welcome />
        <About />
      </Container>
      <Tags className={styles.app__tagsWrapper} />
      <Container>
        <Mission />
      </Container>
      <div ref={arrowUpContainer}>
        {isUpButtonVisible && (
          <div className={styles.app__arrowUpWrapper}>
            <UpButton />
          </div>
        )}
        <Container>
          <Projects />
          <Services />
          <Advantages />
          <Stages />
          <Info />
          <FAQ />
        </Container>
        <SupFooter />
        <Footer />
      </div>
      <NotificationModal />
    </NotificationProvider>
  );
}
