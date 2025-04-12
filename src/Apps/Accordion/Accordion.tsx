import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./accordion.css";

const accordionData = [
  {
    title: "Accordion 1",
    content:
      "Content for Accordion 1: lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Accordion 2",
    content:
      "Content for Accordion 2: lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Accordion 3",
    content:
      "Content for Accordion 3: lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={`accordion-${index}`} className="accordion-item">
          <div
            onClick={() => {
              setOpenIndex(index == openIndex ? -1 : index);
            }}
            className="accordion-btn"
          >
            <div>{item.title}</div>
            {openIndex == index ? <ChevronUp /> : <ChevronDown />}
          </div>
          <div
            style={{
              display: openIndex == index ? "block" : "none",
            }}
            className="accordion-content"
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
