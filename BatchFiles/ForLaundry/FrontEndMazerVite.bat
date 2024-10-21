@echo off
cd ..\FrontEndMazerVite

call npm run WashingVoucher

xcopy .\publicDir\WashingVoucher ..\CrudGenV2\public\Factory\WashingVoucher /h /i /c /k /e /r /y
