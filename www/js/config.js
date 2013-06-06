/**
 * Environment variable for the remote server. This is used to select the appropriate remote URL
 * @type {string} Environment Name
 */
const RemoteServerEnvironment = "Prod";

/**
 * Remote URL Variables. One for each possible RemoteServerEnvironment value. Must Be named like
 * RemoteServerEnvironment + "_RemoteURL"
 */
const Dev_RemoteURL = "http://www.reurgency.com/#/Dev";
const QA_RemoteURL = "http://www.reurgency.com/#/QA";
const Staging_RemoteURL = "http://www.reurgency.com/#/Staging";
const Demo_RemoteURL = "http://www.reurgency.com/#/Demo";
const Prod_RemoteURL = "http://www.reurgency.com/#/Prod";
//END REMOTE URL VARIABLES

/**
 * The apps title. This will be injected into document.title
 * @type {string}
 */
const AppTitle = "reUrgency Base PhoneGap Build App";
/**
 * The Title in the config block. Typically the company name
 * @type {string}
 */
const ConfigTitle = "reUrgency";
/**
 * The msg to display while we wait for PhoneGaps deviceready event
 * @type {string}
 */
const ConfigMsg = "Configuring Application";
/**
 * The msg to display after PhoneGaps deviceready event is caught and while the app is doing the online check before
 * redirecting to the remote URL
 * @type {string}
 */
const ConfigCompleteMsg = "Configuration Complete";
/**
 * The title inside the section that appears when PhoneGap detects that the device doesn't have a network connection
 * @type {string}
 */
const OfflineTitle = "Offline";
/**
 * The message inside the section that appears when PhoneGap detects that the device doesn't have a network connection
 * @type {string}
 */
const OfflineMsg = "This app requires an active internet connection. Please check your connection and try again";
/**
 * The yext on the button inside the section that appears when PhoneGap detects that the device doesn't have a network
 * connection used to manually re-check the connection
 * @type {string}
 */
const RetryConnectionBtnMsg = "Retry";

/**
 * Bootstrapping function. Place any code here that needs to run at startup, before index.js creates
 * reference to our actual PhoneGap App
 */
var init = (function(){
    //START SET THE DOM VALUES FROM THE CONFIG CONSTANTS
    document.title = AppTitle;
    document.getElementById("config_title").innerHTML = ConfigTitle;
    document.getElementById("config_msg").innerHTML = ConfigMsg;
    document.getElementById("configComplete_msg").innerHTML = ConfigCompleteMsg;
    document.getElementById("offline_title").innerHTML = OfflineTitle;
    document.getElementById("offline_msg").innerHTML = OfflineMsg;
    document.getElementById("retryConnection_btn").value = RetryConnectionBtnMsg;
    //END
})();
