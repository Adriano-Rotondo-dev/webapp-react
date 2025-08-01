import Jumbotron from "../components/Jumbrotron";

export default function HomePage() {
  return (
    <>
      <Jumbotron
        title="Welcome to the Site"
        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum in lacus vitae quam facilisis suscipit. 
Integer eu velit sit amet sem egestas ultrices. 
Curabitur tincidunt, nulla in interdum tincidunt, libero leo tempus magna, 
ac tincidunt elit orci id leo.`}
      />
    </>
  );
}
