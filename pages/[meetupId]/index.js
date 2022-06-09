import MeetupDetail from "../../components/meetups/MeetupDetail";
// import {mongodb, ObjectId} - convert id to string in mongodb.
function MeetupDetails(props) {
  return (
    // Hard Coded
    // <MeetupDetail
    //   image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg"
    //   title="First Meetup"
    //   address="Some Street"
    //   description="This is a first meetup"
    // />
    <MeetupDetail
      // need to get to meetupData first, before specific object
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = MongoClient.connect("mongodv+srv://[username-here]:<password> rest of connection string");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // empty object returns all document objects. 2nd object w/ id is returning just the id of all doc objects
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    // This key tells Next you paths array contains all supported parameter values, or just some of them.
    // false, says that paths contain all of our id values
    // true, Next tries to generate a page for this id dynamically
    // fallback allows us to pre-generate some of our pages for specific id values
    fallback: false,

    // below, we are generating our paths dynamically
    paths: meetupId.map((meetup) => ({
      params: { meetupID: meetup._id.toString() },
    })),
    // below is the paths for dynamic pages. This is used for APIs also, but usually not hardcoded
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const client = MongoClient.connect("mongodv+srv://[username-here]:<password> rest of connection string");
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // findOne finds one single document.
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) }); // ObjectId needed to convert id to string object

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,

        // Hard coded data
        // image:
        //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
        // id: "m1",
        // title: "First Meetup",
        // address: " Some Street",
        // description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
