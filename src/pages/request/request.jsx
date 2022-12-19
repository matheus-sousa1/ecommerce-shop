import { useEffect, useState } from "react";
import "./request.css";
import { Loading } from "../../loading/loading";
import { CheckCircle } from "phosphor-react";

export const Request = () => {
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRemoveLoading(true);
    }, 2000);
  });

  return (
    <div className="sucess">
      {!removeLoading && <Loading />}
      {removeLoading && (
        <div className="message">
          <h1>
            Pedido concluído <CheckCircle size={32} color="#0fe612" />{" "}
          </h1>
        </div>
      )}
    </div>
  );
};
