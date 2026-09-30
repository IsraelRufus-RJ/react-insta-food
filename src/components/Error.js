import { useRouteError, Link } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log("Error: ", err);
    return (
        <div className="error-container">
            <div className="generic-error">
                <h1>We'll be back shortly</h1>
                <p>
                    We are fixing a temporary glitch. Sorry for the
                    inconvenience.
                </p>
                <p>
                    {err.status} {err.statusText}
                </p>
                <div className="back-btn">
                    <Link to="/">Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
