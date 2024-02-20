import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import BackButton from "../../components/BackButton";

function Beacons() {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    client
      .getEntries({
        content_type: "supernaOne", //
      })
      .then((response) => {
        setCaseStudies(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <BackButton />
      {caseStudies.map(({ fields }) => (
        <article className="flex flex-col space-y-4 mt-10" key={fields.title}>
          <div>
            <h2 className="subheader">{fields.title}</h2>
            <p className="header">{fields.description}</p>
          </div>
          <div>
            <p className="body">Timeline: {fields.timeline}</p>
            <p className="body">Platform: {fields.platform}</p>
            <p className="body">Team: {fields.team}</p>
          </div>
          <div className="body">{fields.article}</div>
          {fields.images &&
            fields.images.map((image, index) => (
              <img
                key={index}
                src={image.fields.file.url}
                alt={image.fields.title}
              />
            ))}
        </article>
      ))}
    </div>
  );
}

export default Beacons;
