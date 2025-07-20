import ringInfo from "./Rings.json";
import React from "react";
import { Link } from "react-router-dom";

const ringNames = ringInfo.map((ring) => ring.Name);
export { ringNames };

export function processRingText(text) {
  // First split by <br/> tags (all variants), then process each segment for ring names
  const segments = text.split(/<br\s*\/?>/i);
  
  return segments.map((segment, segmentIndex) => {
    // Process ring names in this segment (original functionality)
    const ringPattern = new RegExp(
      `\\b(${ringNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
      'g'
    );
    const parts = segment.split(ringPattern);
    
    const processedSegment = parts.map((part, partIndex) => {
      if (ringNames.includes(part)) {
        return (
          <Link 
            key={`${segmentIndex}-${partIndex}`} 
            to={`/rings/${part.toLowerCase()}`}
            className="ring-link"
          >
            {part}
          </Link>
        );
      }
      return part;
    });
    
    // Add line break after all segments except the last one
    return (
      <React.Fragment key={`seg-${segmentIndex}`}>
        {processedSegment}
        {segmentIndex < segments.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

