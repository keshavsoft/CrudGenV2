@echo off
cd ..\LaundryFrontEnd

call npm run WashtexBranch
call npm run BranchToday
call npm run TodayReports
call npm run Masters
call npm run ToFactory
call npm run Branch-NewOrders
call npm run CustomersToOrders
call npm run Main
call npm run BranchAll
call npm run AllReports
call npm run Today-QrCodes
call npm run Today-Orders
call npm run Admin-AdminToday-QrCodes
call npm run Admin-AdminToday-Orders
call npm run Admin-Masters
call npm run Admin-AdminAllDays-QrCodes
call npm run Admin-AdminAllDays-QrCodeWise-AsArray
call npm run Admin-AdminAllDays-QrCodeWise-BranchWise

xcopy .\publicDir ..\CrudGenV2\public\Laundry /h /i /c /k /e /r /y

cd ..\CrudGenV2