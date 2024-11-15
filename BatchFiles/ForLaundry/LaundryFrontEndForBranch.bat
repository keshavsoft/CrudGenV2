@echo off
cd ..\LaundryFrontEndForBranch

call npm run Today-Orders
call npm run NewOrders

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Branch /h /i /c /k /e /r /y

cd ..\CrudGenV2