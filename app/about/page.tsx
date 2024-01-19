"use client";
import React from "react";
import { NavigationMenuDemo } from "../components/nav";
import DemoVideo from "./components/demoVideo";
import ContentOne from "./components/contentOne";
import Team from "./components/team";

const About = () => {
  return (
    <>
      <NavigationMenuDemo />

      <DemoVideo />

      <ContentOne />

      <Team />
    </>
  );
};

export default About;
