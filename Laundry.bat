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
call npm run Branch-FromFactory
call npm run Branch-FromFactoryQrCodes


xcopy .\publicDir ..\CrudGenV2\public\Laundry /h /i /c /k /e /r /y

cd ..\FRONTENDMAZERVITE

call npm run FromBranchVoucher
call npm run FromBranchQrCodes
call npm run WashingVoucher
call npm run FromEntryQrCodes
call npm run PressingVoucher
call npm run PressingQrCodes
call npm run CompletionVoucher
call npm run CompletionQrCodes



xcopy .\publicDir ..\CrudGenV2\public\Factory /h /i /c /k /e /r /y


cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir ..\CrudGenV2\public\crudFrontEnd /h /i /c /k /e /r /y

cd ..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\CrudGenV2\public\LoginUsers /h /i /c /k /e /r /y


cd ..\CrudGenV2
