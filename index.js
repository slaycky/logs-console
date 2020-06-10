"use_strict";
const xa = require("xa");
const buildMessage = require("./buildMessage");
const colors = require("./colors");

let APPLICATION_ID = "";
let AUTHENTICATION_LOGGER = "";
let URL_LOGGER = "";
let ENVIRONMENT = "";
let ENABLE_RESPONSE = false;

let LogsConsole = {
  init: function (
    application,
    authentication,
    url_logger,
    environment,
    enable_response = false
  ) {
    APPLICATION_ID = application;
    AUTHENTICATION_LOGGER = authentication;
    URL_LOGGER = url_logger;
    ENVIRONMENT = environment;
    ENABLE_RESPONSE = enable_response;
  },
  console: function (content, type = "exception") {
    let headers = new Headers({
      "Content-Type": "application/json",
      authentication: AUTHENTICATION_LOGGER,
    });

    fetch(URL_LOGGER, {
      headers: headers,
      method: "POST",
      body: JSON.stringify({
        type: type,
        content: content,
        environment: ENVIRONMENT,
        applicationId: APPLICATION_ID,
      }),
    })
      .then((response) => {
        ENABLE_RESPONSE && window.console.log("response", response);
      })
      .catch((err) => {
        ENABLE_RESPONSE && window.console.log("logger error", err);
      });
  },
  log: {
    success: (message) => {
      xa.custom("SUCCESS", buildMessage(message), {
        backgroundColor: colors.success,
      });
    },
    info: (message) => {
      xa.custom("INFO", buildMessage(message), {
        backgroundColor: colors.info,
      });
    },
    warn: (message) => {
      xa.custom("WARNING", buildMessage(message), {
        backgroundColor: colors.warn,
      });
    },
    error: (message) => {
      xa.custom("ERROR", buildMessage(message), {
        backgroundColor: colors.error,
      });
    },
  },
};

module.exports = LogsConsole;
