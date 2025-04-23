import { useState, useEffect } from "react";
import { useAlert } from "../contexts/AlertContext";

export default function Alert() {
    const { alert } = useAlert();

    const [viewAlert, setViewAlert] = useState(true);

    function viewAlertFun() {
        const timer = setTimeout(() => {
            setViewAlert(false);
        }, 10000);


        function cleanTimer() {
            return clearTimeout(timer);
        }
        return cleanTimer;
    }

    useEffect(viewAlertFun, []);

    return (
        <>
            {viewAlert && alert.message && <div>{alert.type}: {alert.message}</div>}
        </>
    )

}