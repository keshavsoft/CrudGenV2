@echo off
cd ..\LaundryFrontEnd

call npm run WashtexBranch
call npm run BranchToday
call npm run TodayReports
call npm run Masters
call npm run ToFactory
call npm run NewOrders
call npm run CustomersToOrders
call npm run Main
call npm run BranchAll
call npm run AllReports
call npm run Today-QrCodes
call npm run Today-Orders
call npm run Admin-AdminToday-QrCodes
call npm run Admin-AdminToday-Orders
call npm run Admin-Masters

xcopy .\publicDir ..\CrudGenV1\public\Laundry /h /i /c /k /e /r /y
