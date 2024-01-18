import Image from "next/image";
import question from "../assets/question.svg";

export default function Header({ openPane }) {
  return <div id="header-bar">
    <p className="title-word">Intervle</p>
    <Image style={{position: 'absolute', top: 20, right: 20}} alt={"question mark"} src={question} height={30} onClick={openPane} />
  </div>
}