import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContentSection = ({ contentData }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Render all sections except the one with hasReadMore */}
      {contentData.map((section, index) => {
        if (section.hasReadMore) return null;

        return (
          <div key={index} className="mb-8">
            {section.heading && (
              <h2
                className={`text-2xl font-bold mb-4 font-['Abrobold'] ${section.headingClass}`}
              >
                {section.heading}
              </h2>
            )}

            {section.paragraphs?.map((p, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {p}
              </p>
            ))}

            {section.listItems && (
              <ul className="list-disc pl-6 space-y-2 text-gray-800">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item.content}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      {/* Read More Button */}
      {!showFullContent && (
        <div className="mb-8">
          <button
            onClick={handleReadMoreClick}
            className="text-black font-[boldtext] hover:text-blue-800"
          >
            Read More
          </button>
        </div>
      )}

      {/* Render the section with hasReadMore only after Read More is clicked */}
      {showFullContent &&
        contentData.map((section, index) => {
          if (!section.hasReadMore) return null;

          return (
            <div key={index} className="mb-8">
              {section.heading && (
                <h2
                  className={`text-2xl font-bold mb-4 font-['Abrobold'] ${section.headingClass}`}
                >
                  {section.heading}
                </h2>
              )}

              {section.paragraphs?.map((p, i) => (
                <p key={i} className="text-gray-700 mb-4">
                  {p}
                </p>
              ))}

              {section.listItems && (
                <ul className="list-disc pl-6 space-y-2 text-gray-800">
                  {section.listItems.map((item, i) => (
                    <li key={i}>{item.content}</li>
                  ))}
                </ul>
              )}

              {section.locations && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-2">Locations We Serve</h4>
                  <div className="flex flex-wrap gap-2 text-blue-600">
                    {section.locations.map((loc, i) => (
                      <React.Fragment key={i}>
                        <Link to={loc.url} className="hover:underline">
                          {loc.name}
                        </Link>
                        {i < section.locations.length - 1 && <span>|</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ContentSection;