// our-domain.com/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    // Since the API here is internal, we use /api/new-meetup to fetch the data in that file path
    const response = await fetch('/api/new-meetup') // http://some-domain.com/abc - this path is used for an external API
    console.log(enteredMeetupData);
  
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
