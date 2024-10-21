@echo off
cd ..\..\..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\CrudGenV1\public\LoginUsers /h /i /c /k /e /r /y
