#!/bin/bash

cd ../crudFrontEnd

# Write environment variables to .env file
echo 'StartUrl="binV4"' > .env
echo 'TableName="StudentNames"' >> .env

# Run the npm scripts
npm run Table-ShowFromJs
npm run CreateStatic
npm run UnProtected-CreateStatic

# Copy files with the same options as the xcopy command
cp -r ./publicDir/TableShowFromJs ../CrudGenV2/public/Students/TableShowFromJs
cp -r ./publicDir/Protected/Create/Static ../CrudGenV2/public/Students/Protected/Create/Static
cp -r ./publicDir/UnProtected/Create/Static ../CrudGenV2/public/Students/UnProtected/Create/Static

cd ../FrontEndForClients

# Run the npm script for Students
# npm run Students

# Copy the Students directory
cp -r ./publicDir/Students ../CrudGenV2/public/Students

cd ../CrudGenV2
