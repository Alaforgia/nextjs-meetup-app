import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

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

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  return (
    <Layout>
      <MeetupList meetups={loadedMeetups} />
    </Layout>
  );
}

// only works in pages component files
// getStaticProps is a reserved name in Next
// Next will wait for data to be loaded w/ async promise
export async function getStaticProps() {
  // code in here will not end up on client side. Never execute on client side.
  // It is executed during build process, not on user machines

  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
