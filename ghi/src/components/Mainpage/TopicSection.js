import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./TopicSection.css";
import React, { useEffect, useState } from "react";


function TopicSection() {
  const [topics, setTopics] = useState([]);

  async function loadTopics() {
    const url = "http://localhost:8000/api/topics";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTopics(data);
      console.log(data);
    }
  }

  useEffect(() => {
    loadTopics();
  }, []);

  return (
    <>
      <div className="row">
        {topics?.map((topic) => (
          <div
            key={topic.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3 mx-5"
          >
            <a key={topic.id} href={`/api/topics${topic.id}`}>
              <div key={topic.id} className="card " style={{ width: "18rem" }}>
                <img src={topic.image_url} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{topic.title}</h5>
                  <p className="card-text text-decoration-none">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}


export default TopicSection;


//   return (
//     <div className="topic-container">
//       <h1>THIS IS WHERE TOPIC OF THE DAY DESCRIPTION WOULD GO</h1>
//       <div className="topic-btns">
//         <Button
//           className="btns"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           AGREE
//         </Button>
//         <Button
//           className="btns"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           DISAGREE
//         </Button>
//         <Button
//           className="btns"
//           buttonStyle="btn--outline"
//           buttonSize="btn--large"
//         >
//           VOTE HERE
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default TopicSection;
