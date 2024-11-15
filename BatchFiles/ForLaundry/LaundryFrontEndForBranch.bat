@echo off
cd ..\LaundryFrontEndForBranch

call npm run Branch-Today-Orders

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Branch /h /i /c /k /e /r /y

cd ..\CrudGenV2