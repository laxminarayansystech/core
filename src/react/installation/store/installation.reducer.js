import reducerRegistry from '../../store/reducerRegistry';
import * as actions from './installation.actions';
import { actions as initActions } from '../../store/init';

const reducer = (state = {
	language: 'en_us',
	loading: false,
	dbSettings: null,
	systemInfo: null,
	folderSettings: null,
	adminAccount: {
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		password2: ''
	}
}, action) => {
	switch (action.type) {
		case initActions.INIT_DATA_LOADED: {
			const { language, dbSettings, folderSettings, systemInfo, adminAccount } = action.payload;
			return {
				...state,
				language,
				dbSettings,
				systemInfo,
				folderSettings,
				adminAccount: {
					...state.adminAccount,
					...adminAccount
				}
			};
		}
		case actions.START_REQUEST: {
			return {
				...state,
				loading: true
			};
		}
		case actions.REQUEST_RETURNED: {
			return {
				...state,
				loading: false
			};
		}
		case actions.REQUEST_ERROR: {
			return {
				...state,
				loading: false
			};
		}
		case initActions.LANGUAGE_UPDATED: {
			return {
				...state,
				language: action.payload.language
			};
		}
		case actions.TOGGLE_CUSTOM_CACHE_FOLDER: {
			return {
				...state,
				folderSettings: {
					...state.folderSettings,
					useCustomCacheFolder: !state.folderSettings.useCustomCacheFolder
				}
			};
		}
		case actions.UPDATE_CUSTOM_CACHE_FOLDER: {
			return {
				...state,
				folderSettings: {
					...state.folderSettings,
					customCacheFolder: action.payload.value
				}
			};
		}

		case actions.UPDATE_DATABASE_FIELD: {
			const { field, value } = action.payload;
			return {
				...state,
				dbSettings: {
					...state.dbSettings,
					[field]: value
				}
			};
		}

		case actions.DATABASE_TABLES_CREATED: {
			return {
				...state,
				dbSettings: {
					...state.dbSettings,
					dbTablesCreated: true,
					dbTablesExist: true
				}
			};
		}

		case actions.UPDATE_ACCOUNT_FIELD: {
			const { field, value } = action.payload;
			return {
				...state,
				adminAccount: {
					...state.adminAccount,
					[field]: value
				}
			};
		}
	}
	return state;
};

reducerRegistry.register('installation', reducer);
