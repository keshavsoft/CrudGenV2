@echo off
cd ..\LaundryFrontEndForAdmin

call npm run AdminAllDays-CommonConfig-QrCode-AsArray
call npm run AdminAllDays-CommonConfig-QrCode-BranchWise
call npm run AdminAllDays-CommonConfig-QrCode-BranchFilter

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\CrudGenV2