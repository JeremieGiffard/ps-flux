import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
	return (
		<div>
			<h2>Page Not Found</h2>
			<p>404 module like, for bogus URL</p>
			<Link to="/" className="btn btn-primary">
				Back to Home
			</Link>
		</div>
	);
}

export default NotFoundPage;

