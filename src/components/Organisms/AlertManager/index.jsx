import React, { useEffect } from "react";
import Alert from "../../Atoms/Alert";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";

const AlertManager = () => {
  /* コンポーネント関数内 */
  //Contextを取得
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.visible === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext.visible]);

  return (
    <Alert
      isActive={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    />
  );
};

export default AlertManager;
