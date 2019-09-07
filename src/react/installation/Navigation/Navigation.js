import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './navigation.scss';


const getRowProps = (history, link, currentPage, targetPage) => {
	let rowProps = {};
	if (currentPage === targetPage) {
		rowProps.className = styles.navCurrent;
	} else if (currentPage < targetPage) {
		rowProps.className = styles.navRemaining;
	} else {
		rowProps.className = styles.navVisited;
		rowProps.onClick = () => history.push(link);
	}
	return rowProps;
};


const Navigation = ({ i18n, history, location, className }) => {
	const navMatch = location.pathname.match(/step(\d)/);
	const currentPage = (navMatch && navMatch.length > 1) ? parseInt(navMatch[1], 10) : 1;

	const Row = ({ page, label }) => {
		const link = (page === 1) ? '/' : `/step${page}`;
		return (
			<div {...getRowProps(history, link, currentPage, page)}>
				{page} <span className={styles.delim}>-</span> {label}
			</div>
		);
	};

	return (
		<div className={`${styles.navItems} ${className}`}>
			<Row page={1} label={i18n.word_welcome} currentPage={currentPage} />
			<Row page={2} label={i18n.phrase_system_check} currentPage={currentPage} />
			<Row page={3} label={i18n.phrase_create_database_tables} currentPage={currentPage} />
			<Row page={4} label={i18n.phrase_create_config_file} currentPage={currentPage} />
			<Row page={5} label={i18n.phrase_create_admin_account} currentPage={currentPage} />
			<Row page={6} label={i18n.phrase_clean_up} currentPage={currentPage} />
		</div>
	);
};

export default withRouter(Navigation);