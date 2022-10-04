export default function GoogleMap() {
  return (
    // Important! Always set the container height explicitly
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25762.03114875637!2d-76.84567393914783!3d36.18470665090377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89afbe5166a57069%3A0x842a5bd56b0043d0!2sRobertson%20Equipment%20Inc.!5e0!3m2!1sen!2sua!4v1664630084416!5m2!1sen!2sua"
        className="w-screen"
        loading="lazy"
      ></iframe>
    </div>
  );
}
