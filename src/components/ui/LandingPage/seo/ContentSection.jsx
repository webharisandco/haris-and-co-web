import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContentSection = ({ contentData }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMoreClick = () => {
    setShowFullContent(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      {contentData.map((section, index) => (
        <div key={index} className="mb-8">
          {section.heading && (
            <h2 className={`text-2xl font-bold mb-4 font-['Abrobold'] ${section.headingClass}`}>
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
              {section.listItems.map((item, i) => {
                if (item.type === "text") {
                  return <li key={i}>{item.content}</li>;
                } else if (item.type === "subSection" && showFullContent) {
                  return (
                    <div key={i} className="mt-6 border-t pt-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      {item.subList.map((subItem, si) => (
                        <div key={si} className="mb-3">
                          {subItem.label && (
                            <p className="font-bold text-gray-800">{subItem.label}</p>
                          )}
                          <p className="text-gray-700">{subItem.text}</p>
                        </div>
                      ))}

                      {item.locations && (
                        <>
                          <h4 className="text-lg font-semibold mt-4">Locations We Serve</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.locations.map((loc, li) => (
                              <React.Fragment key={li}>
                                <Link
                                  to={loc.url}
                                  className="text-blue-600 hover:underline"
                                >
                                  {loc.name}
                                </Link>
                                {li < item.locations.length - 1 && <span>|</span>}
                              </React.Fragment>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          )}

          {section.hasReadMore && !showFullContent && (
            <button
              onClick={handleReadMoreClick}
              className="mt-4 text-black font-[boldtext]  hover:text-blue-800"
            >
              Read More
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentSection;