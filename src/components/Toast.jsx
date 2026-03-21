import { useEffect } from "react";

function Toast({ message, show, setShow }) {
  useEffect(() => {
    if (show) {
      setTimeout(() => setShow(false), 2000);
    }
  }, [show]);

  if (!show) return null;

  return <div className="toast">{message}</div>;
}

export default Toast;