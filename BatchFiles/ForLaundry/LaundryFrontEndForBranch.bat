@echo off
cd ..\LaundryFrontEndForBranch

call npm run Today-Orders
call npm run Today-QrCodes
call npm run NewOrders
call npm run CustomersToOrders
call npm run Masters
call npm run BranchToday
call npm run TodayReports
call npm run Dashboard-QrCodeWise-AsArray
call npm run Branch-CommonConfig-Menu
call npm run Dashboard-CommonConfig-AsArray
call npm run Factory-ToFactory
call npm run FromFactory-Completion
call npm run FromFactory-EntryReturn
call npm run FromFactory-WashingReturn
call npm run FromFactory-PressingReturn
call npm run FromFactory-EntryReturnQrCodes
call npm run FromFactory-WashingReturnQrCodes
call npm run FromFactory-PressingReturnQrCodes
call npm run FromFactory-CompletionQrCodes
call npm run Dashboard-QrCodeAtStage-BranchFilter

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Branch /h /i /c /k /e /r /y

cd ..\CrudGenV2