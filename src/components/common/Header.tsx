import { HomeFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="header-container"
        style={{
          padding: "1rem",
          marginBottom: "0.5rem",
          position: "sticky",
          top: 0,
          background: "#ff6314",
          color: "#d7d7d7",
          zIndex: 10000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="header-title">
          <h3>Reddit Clone</h3>
        </div>
        <div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/subreddits")}
          >
            <HomeFilled style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
    </>
  );
};
