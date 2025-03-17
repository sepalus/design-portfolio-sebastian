# Local

nvm use 16
npm start

# Deployment

nvm use 16
npm run build
npm run deploy

In case of error:

1.  delete node_modules
    delete package-lock.json
    nvm use 16
    npm install

2.  Check that CNAME file is in gh-pages repository in Github
