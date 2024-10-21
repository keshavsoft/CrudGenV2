cd ../crudFrontEnd

npm run Table-ShowFromJs
npm run CreateStatic
npm run UnProtected-CreateStatic

cp -R ./publicDir/TableShowFromJs ../CrudGenV1/public/Students/TableShowFromJs
cp -R ./publicDir/Protected/Create/Static ../CrudGenV1/public/Students/Protected/Create/Static
cp -R ./publicDir/UnProtected/Create/Static ../CrudGenV1/public/Students/UnProtected/Create/Static

cd ../FrontEndForClients

npm run students

cp -R ./publicDir/Students ../CrudGenV1/public/Students

cd ../CrudGenV1
