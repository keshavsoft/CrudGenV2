@echo off
cd ..\LaundryFrontEndForFactory

call npm run FromBranchVoucher
call npm run FromBranchQrCodes

call npm run WashingVoucher
call npm run FromEntryQrCodes

call npm run PressingVoucher
call npm run PressingQrCodes

call npm run CompletionVoucher
call npm run CompletionQrCodes

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\CrudGenV2