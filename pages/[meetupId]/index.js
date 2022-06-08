import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some Street"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    // This key tells Next you paths array contains all supported parameter values, or just some of them.
    // false, says that paths contain all of our id values
    // true, Next tries to generate a page for this id dynamically
    // fallback allows us to pre-generate some of our pages for specific id values
    fallback: false,
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

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg",
        id: "m1",
        title: "First Meetup",
        address: " Some Street",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
