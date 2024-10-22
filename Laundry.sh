cd ../LaundryFrontEnd

npm run WashtexBranch
npm run BranchToday
npm run TodayReports
npm run Masters
npm run ToFactory
npm run NewOrders
npm run CustomersToOrders
npm run Main
npm run BranchAll
npm run AllReports
npm run Today-QrCodes
npm run Today-Orders
npm run Admin-AdminToday-QrCodes
npm run Admin-AdminToday-Orders
npm run Admin-Masters
npm run Branch-FromFactory

cp -r ./publicDir ../CrudGenV2/public/Laundry 

cd ../FRONTENDMAZERVITE

npm run FromBranchVoucher
npm run FromBranchQrCodes
npm run WashingVoucher
npm run FromEntryQrCodes
npm run PressingVoucher
npm run PressingQrCodes
npm run CompletionVoucher
npm run CompletionQrCodes



cp -r ./publicDir ../CrudGenV2/public/Factory 


cd ../crudFrontEnd

npm run Dashboard

cp -r ./publicDir ../CrudGenV2/public/crudFrontEnd 

cd ../FrontEndForUsers

npm run Users

cp -r ./publicDir/LoginUsers ../CrudGenV2/public/LoginUsers 


cd ../CrudGenV2
