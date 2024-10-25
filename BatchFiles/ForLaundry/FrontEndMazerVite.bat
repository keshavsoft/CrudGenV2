@echo off
cd ..\FrontEndMazerVite

call npm run FromBranchVoucher
call npm run FromBranchQrCodes

call npm run WashingVoucher
call npm run FromEntryQrCodes

call npm run PressingQrCodes
call npm run PressingVoucher

call npm run CompletionVoucher
call npm run CompletionQrCodes

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Factory /h /i /c /k /e /r /y

cd ..\CrudGenV2