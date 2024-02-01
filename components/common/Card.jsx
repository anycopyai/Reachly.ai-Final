import React from "react";

const Card = ({ icon1, icon2, heading, desc }) => {
  return (
    <div className="cardLayout min-h-[12em] hover:border-10 hover:border-solid hover:border-[#466ab1]">
      <div class="grid grid-cols-12 gap-4">
        <div
          class="col-span-1"
          style={{ height: "24px", width: "24px", color: "#1890ff" }}
        >
          {" "}
          {icon1}
        </div>

        <div class="col-span-11">
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItem: "center",
            }}
          >
            {" "}
            <div className="cardTitle">{heading}</div>{" "}
            <div style={{ height: "22px", width: "22px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 23"
                fill="none"
              >
                <path
                  d="M19.51 8.18614L14.0551 7.39337L11.6166 2.44981C11.55 2.31446 11.4405 2.20489 11.3051 2.13829C10.9657 1.97071 10.5532 2.11036 10.3834 2.44981L7.94495 7.39337L2.49006 8.18614C2.33967 8.20763 2.20217 8.27852 2.0969 8.38595C1.96963 8.51676 1.8995 8.69274 1.90192 8.87524C1.90433 9.05773 1.9791 9.23179 2.10979 9.35919L6.05647 13.207L5.12405 18.6404C5.10218 18.7668 5.11617 18.8968 5.16442 19.0157C5.21267 19.1345 5.29326 19.2375 5.39705 19.3128C5.50083 19.3882 5.62366 19.433 5.75161 19.4421C5.87955 19.4513 6.00749 19.4244 6.12092 19.3645L11 16.7992L15.8791 19.3645C16.0123 19.4354 16.167 19.459 16.3153 19.4332C16.6891 19.3688 16.9405 19.0143 16.876 18.6404L15.9436 13.207L19.8903 9.35919C19.9977 9.25391 20.0686 9.11641 20.0901 8.96602C20.1481 8.59005 19.886 8.242 19.51 8.18614Z"
                  fill="#FACC15"
                  fill-opacity="0.85"
                />
              </svg>
            </div>
          </span>

          <div className="cardDescription" style={{ marginTop: "12px" }}>
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
