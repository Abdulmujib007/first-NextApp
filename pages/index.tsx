import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>Mujib List | Home</title>
        <meta name="keywords" content="mj lists" />
      </Head>
      <div>
        <h1 className="text-5xl">Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          temporibus reprehenderit in, asperiores explicabo eaque dolore
          consectetur assumenda enim molestiae quidem officiis optio illo
          accusantium voluptate nam ut recusandae iusto!
        </p>
        <Link href="/MJ">
          <p className={styles.container}>see mujib listing</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
