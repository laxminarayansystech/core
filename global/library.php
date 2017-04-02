<?php

require_once(__DIR__ . "/code/Accounts.class.php");
require_once(__DIR__ . "/code/Administrator.class.php");
require_once(__DIR__ . "/code/Clients.class.php");
require_once(__DIR__ . "/code/Core.class.php");
require_once(__DIR__ . "/code/Database.class.php");
require_once(__DIR__ . "/code/DatabaseSessions.class.php");
require_once(__DIR__ . "/code/Emails.class.php");
require_once(__DIR__ . "/code/Fields.class.php");
require_once(__DIR__ . "/code/FieldSizes.class.php");
require_once(__DIR__ . "/code/FieldTypes.class.php");
require_once(__DIR__ . "/code/FieldValidation.class.php");
require_once(__DIR__ . "/code/Files.class.php");
require_once(__DIR__ . "/code/Forms.class.php");
require_once(__DIR__ . "/code/General.class.php");
require_once(__DIR__ . "/code/Hooks.class.php");
require_once(__DIR__ . "/code/Installation.class.php");
require_once(__DIR__ . "/code/ListGroups.class.php");
require_once(__DIR__ . "/code/Modules.class.php");
require_once(__DIR__ . "/code/OptionLists.class.php");
require_once(__DIR__ . "/code/Pages.class.php");
require_once(__DIR__ . "/code/Sessions.class.php");
require_once(__DIR__ . "/code/Settings.class.php");
require_once(__DIR__ . "/code/Submissions.class.php");
require_once(__DIR__ . "/code/Templates.class.php");
require_once(__DIR__ . "/code/Themes.class.php");
require_once(__DIR__ . "/code/Translations.class.php");
require_once(__DIR__ . "/code/Upgrade.class.php");
require_once(__DIR__ . "/code/User.class.php");
require_once(__DIR__ . "/code/Views.class.php");
require_once(__DIR__ . "/code/validation.php");

// autoload dependencies
require_once(__DIR__ . "/../vendor/autoload.php");

//if ($config_file_exists && (!isset($g_defer_init_page) || !$g_defer_init_page)) {
//    if (isset($_GET["logout"])) {
//        Core::$user->logout();
//    }
//}
