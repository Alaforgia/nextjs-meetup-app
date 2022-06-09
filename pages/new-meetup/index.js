// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/router";
import { useRouter } from "next/router";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    // Since the API here is internal, we use /api/new-meetup to fetch the data in that file path
    const response = await fetch("/api/new-meetup", {
      // http://some-domain.com/abc - this path is used for an external API
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(enteredMeetupData);
  }

  return (
    // Meta data
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="add you own meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
