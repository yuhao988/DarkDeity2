import ringInfo from "./Rings.json";
import { Link } from "react-router-dom";

const ringNames = ringInfo.map((ring) => ring.Name);
export { ringNames };

export function processRingText(text) {
  // Create a regex pattern that matches any of the ring names (escaped for special chars)
  const pattern = new RegExp(
    `(${ringNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
    'g'
  );

  // Split the text into parts, some matching ring names and others not
  const parts = text.split(pattern);

  // Process each part
  return parts.map((part, index) => {
    if (ringNames.includes(part)) {
      return (
        <Link 
          key={index} 
          to={`/rings/${part.toLowerCase()}`}
          className="ring-link"
        >
          {part}
        </Link>
      );
    }
    return part;
  });
}