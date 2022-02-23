import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ModalPage from "../components/ModalPage";

const ListItem = ({ text }) => {
  return (
    <div className={styles.listItem}>
      <input type="checkbox" />
      <p>{text}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transform Test - React</title>
        <meta name="description" content="Transform Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <div>
          <h4>Challenge</h4>
          <p className={styles.bold}>Write a reusable Modal component.</p>
          <p>Requirements:</p>
          <ul>
            <ListItem text="A programmatic way to open the modal with some content." />
            <ListItem text="The modal appears centered horizontally and vertically." />
            <ListItem text="The modal resizes to fit the content, but has a minimum and maximum width expressed as px or vw." />
            <ListItem text="Clicking out of the modal closes it." />
            <ListItem text={`Clicking on the "X" closes it.`} />
          </ul>
          <p>What we're looking for:</p>
          <ul>
            <ListItem text="React" />
            <ListItem text="DOM manipulation" />
            <ListItem text="Styles" />
            <ListItem text="Event handling: bubbling, destroying handlers when they are not needed" />
          </ul>
          <h4>Levi Jeans Collection Page</h4>
          <p className={styles.bold}>Set up Scenario:</p>
          <ul>
            <li>You and I are working together on a product team. </li>
            <li>
              Our designers and brand team have just brainstormed a great
              product feature, and they want to share it with us to determine
              its feasibility
            </li>
          </ul>

          <p className={styles.bold}>Background:</p>
          <ul>
            <li>
              Levi Jeans will be trying to increase the recognition of a new
              collection
            </li>
            <li>
              The team will be launching a large number of jeans in a collection
            </li>
          </ul>
          <p className={styles.bold}>Problems to be Solved:</p>
          <ul>
            <li>
              One of the largest barriers to customers purchasing jeans is
              questions about fit
            </li>
            <li>
              Customers want to be confident that jeans will fit them before
              they purchase Model
            </li>
          </ul>
          <p className={styles.bold}>Toggle Solution:</p>
          <ul>
            <li>
              The product team has proposed adding a "model toggle" to the jean
              collection pages. This is a dropdown that would allow users to
              select which model we would show for the product images. Eg,
              Sally, 5'4'', 120lbs.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ModalPage />
      </div>
    </div>
  );
}
