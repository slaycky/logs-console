# Logs Console [![CircleCI](https://circleci.com/gh/dequelabs/pattern-library.svg?style=svg)](https://circleci.com/gh/dequelabs/pattern-library)

## Installation

### NPM

```bash
$ npm install logs-console --save
```


## Usage

Just include in your project

```javascript
import LogsConsole  from "logs-console";
```

create a init config

## Params

| Var Environment | Description |
| ------ | ----------- |
| APPLICATION_ID   | Id application at the server |
| AUTHENTICATION | Authentication is a base64 CLIENT_ID:CLIENT_SECRET server generate |
| URL_SERVER | URL of server to write logs. |
| ENVIRONMENT | Enviroment can be DEVELOPMENT, PRODUCTION, STAGGING. |
| ENABLE_RESPONSE | Enable to show at console response server. |

```javascript
LogsConsole.init(APPLICATION_ID,AUTHENTCATION,URL_SERVER,ENVIRONMENT,ENABLE_RESPONSE);
```

## Params

| Option | Description |
| ------ | ----------- |
| TYPE_ERROR   | can be Success, Error, Warning, etc |
| CONTENT_ERROR | Content of error. |

#### Now you can use like that:
```javascript
  LogsConsole.console(CONTENT_ERROR,TYPE_ERROR)
```