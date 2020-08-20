import React, { useEffect } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

const Alerts = ({ alert, error, message }) => {
	useEffect(() => {
		if (error) {
			if (error.status && error.msg) {
				alert.error(`${error.status}: ${error.msg}`);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);
	useEffect(() => {
		if (message) {
			if (message.msg) alert.success(message.msg);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message]);
	return <div></div>;
};

const mapStateToProps = (state) => ({
	error: state.errors,
	message: state.messages,
});

export default connect(mapStateToProps, {})(withAlert()(Alerts));
