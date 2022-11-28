import { Html } from "@react-three/drei";

const Loading = () => {
  return (
    <Html
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="loader"></div>
        </div>
      </div>
    </Html>
  );
};
export default Loading;
