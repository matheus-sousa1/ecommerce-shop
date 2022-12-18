import { useEffect, useState } from "react";
import "./request.css";
import { Loading } from "../../loading/loading";

export const Request = () => {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [addMessage, setAddMessage] = useState();

  useEffect(() => {
    setTimeout(() => {
      setRemoveLoading(true);
    }, 2000);
  });

  setTimeout(() => {
    setAddMessage();
  }, 2000);

  return (
    <div>
      {!removeLoading && <Loading />}
      {addMessage && <h1>Pedido feito com sucesso</h1>}
    </div>
  );
};
