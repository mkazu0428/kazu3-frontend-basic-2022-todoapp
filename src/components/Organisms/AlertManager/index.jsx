import React from "react";
import Alert from "../../Atoms/Alert";
import { useAlertHandlerContext } from "path/to/contexts/alert_handler";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();

  //AlertHandlerContextから直接値が取り出せる
  console.log(AlertHandlerContext.visible);
  AlertHandlerContext.setAlert("message"); //Alertの表示

  return (
    <AlertHandlerContext>
      <Alert />
    </AlertHandlerContext>
  );
};

export default AlertManager;
