import { useRouter } from "next/router";
import React from "react";

const Card = ({ icon1, icon2, heading, desc, badge, url, data }) => {
  const router = useRouter();
  // const serializedData = JSON.stringify(data);
  return (
    <div
      className="modalinfo"
      onClick={() =>
        router.push({
          pathname: `/${url}`,
          query: {
            heading: heading,
            data: JSON.stringify({
              favorites:data.favorites,
              extrafields: data.Extrafields
            })
       
          },
        })
      }
    >
      <div className="content">
        <div className="url-to-ad" style={{ color: "#03f" }}>
          <img src={icon1} alt="icon" />
        </div>
        <div className="right">
          <div className="frame-parent6">
            <div className="title-parent7">
              <div className="title41">
                {heading} {badge}
              </div>
              {/* <div className="tagcheckabletag">
          <div className="default">New</div>
        </div> */}
            </div>
            <div className="exclamationcircle-icon" style={{ color: "yellow" }}>
              {icon2}
            </div>
          </div>
          <div className="content1">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
