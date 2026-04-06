# SISOLAKI TS

## Environment Setup

Create a `.env` file in the root directory and fill it with the following values:

```env
POSTGRESQL_URL="postgresql://user:password@host/dbname"
SERVER_PORT="YOUR_SERVER_PORT"
WINDOWS_UPLOAD="../upload"
LINUX_UPLOAD="/opt/upload"
TZ="Asia/Makassar"
JWT_SECRET_KEY="YOUR_SECRET_KEY"
```

## Development
```
npm start
```

## Deployment
```
npx tsc
node ./dist/web/web.js
```
