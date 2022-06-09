import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address",
    description: "This is a second meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some Address",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return (
    <Layout>
      <MeetupList meetups={props.meetups} />
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // this code only runs on the server
//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// only works in pages component files
// getStaticProps is a reserved name in Next
// Next will wait for data to be loaded w/ async promise
export async function getStaticProps() {
  // code in here will not end up on client side. Never execute on client side.
  // It is executed during build process, not on user machines

  // fetch data from an API
  // Next allows us to use fetch in server side code snippets as well
  // fetch("/api/meetups");

  const client = MongoClient.connect("mongodv+srv://[username-here]:<password> rest of connection string");

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // revalidate unlocks incremental static generation. Regenerates the server when there are incoming requests
    revalidate: 1, // number of seconds Next will wait until it regenerates this page for an incoming request
    // number used above depends on your data update frequency. If data is updated frequently, than 1 second might be better
  };
}
// A problem with getStaticProps is that if we add more data after it is deployed, it won't update the app w/ that new data.

export default HomePage;
