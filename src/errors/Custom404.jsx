import "./style404.css";
const Custom404 = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            gap: 10,
          }}
        >
          <div className="error">404</div>
          <span className="info">File not found</span>
        </div>
      </div>
    </>
  );
};

export default Custom404;
