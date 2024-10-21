@echo off
cd ..\crudFrontEnd

call npm run Table-ShowFromJs
call npm run CreateStatic
call npm run UnProtected-CreateStatic

xcopy .\publicDir\TableShowFromJs ..\CrudGenV1\public\Students\TableShowFromJs /h /i /c /k /e /r /y
xcopy .\publicDir\Protected\Create\Static ..\CrudGenV1\public\Students\Protected\Create\Static /h /i /c /k /e /r /y
xcopy .\publicDir\UnProtected\Create\Static ..\CrudGenV1\public\Students\UnProtected\Create\Static /h /i /c /k /e /r /y

cd ..\FrontEndForClients

call npm run students

xcopy .\publicDir\Students ..\CrudGenV1\public\Students /h /i /c /k /e /r /y

cd ..\CrudGenV1
