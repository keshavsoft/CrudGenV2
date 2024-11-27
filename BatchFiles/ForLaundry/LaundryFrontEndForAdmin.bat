@echo off
cd ..\LaundryFrontEndForAdmin

call npm run Menu

call npm run AdminAllDays-CommonConfig-Menu

call npm run AdminAllDays-CommonConfig-QrCode-AsArray
call npm run AdminAllDays-CommonConfig-QrCode-BranchWise
call npm run AdminAllDays-CommonConfig-QrCode-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-AsArray
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchWise

xcopy .\publicDir ..\CrudGenV2\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\CrudGenV2