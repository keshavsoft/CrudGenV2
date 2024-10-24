@echo off
cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir\AllTables ..\CrudGenV2\public\crudFrontEnd\AllTables /h /i /c /k /e /r /y

cd ..\CrudGenV2
