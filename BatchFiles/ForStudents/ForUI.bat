@echo off
cd ..\crudFrontEnd

call npm run Table-ShowFromJs
call npm run CreateStatic
call npm run UnProtected-CreateStatic

xcopy .\publicDir\TableShowFromJs ..\CrudGenV2\public\Students\TableShowFromJs /h /i /c /k /e /r /y
xcopy .\publicDir\Protected\Create\Static ..\CrudGenV2\public\Students\Protected\Create\Static /h /i /c /k /e /r /y
xcopy .\publicDir\UnProtected\Create\Static ..\CrudGenV2\public\Students\UnProtected\Create\Static /h /i /c /k /e /r /y

cd ..\FrontEndForClients

call npm run students

xcopy .\publicDir\Students ..\CrudGenV2\public\Students /h /i /c /k /e /r /y

cd ..\CrudGenV2
