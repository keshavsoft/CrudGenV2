@echo off
cd ..\LaundryFrontEndForBranch

call npm run Today-Orders
call npm run Today-QrCodes
call npm run NewOrders
call npm run CustomersToOrders
call npm run Masters
call npm run BranchToday
call npm run TodayReports
call npm run ToFactory
call npm run Dashboard-QrCodeWise-AsArray
call npm run Menu
call npm run Branch-CommonConfig-Menu
call npm run Dashboard-CommonConfig-AsArray
call npm run FromFactory
call npm run FromFactoryQrCodes


xcopy .\publicDir ..\CrudGenV2\public\Laundry\Branch /h /i /c /k /e /r /y

cd ..\CrudGenV2