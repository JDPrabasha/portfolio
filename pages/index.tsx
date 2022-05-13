import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="w-screen min-h-screen bg-red-700">
      <div className="main w-8/12 ml-20">
        <h1 className="text-8xl font-black  text-white pt-6">Hi! I'm Dulaj</h1>
        <h2 className="text-4xl font-bold">I Write. Code. Design</h2>
      </div>
    </div>
  );
};

export default Home;
