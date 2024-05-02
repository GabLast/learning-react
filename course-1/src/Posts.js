import { MdSend, MdConfirmationNumber } from "react-icons/md";

export const Post = () => {
  return <button onClick={onClick}><MdSend/>Get Data<MdConfirmationNumber/></button>;
};

const onClick = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(error);
    });
};
