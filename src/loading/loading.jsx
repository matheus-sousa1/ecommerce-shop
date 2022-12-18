import "./loading.css";
import loading from "./loading.svg";

export const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} />
    </div>
  );
};
