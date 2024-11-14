#!/bin/bash

# Navigate to the LaundryFrontEnd directory
cd ../LaundryFrontEnd

# Run each npm script sequentially
npm run WashtexBranch
npm run BranchToday
npm run TodayReports
npm run Masters
npm run ToFactory
npm run Branch-NewOrders
npm run CustomersToOrders
npm run Main
npm run BranchAll
npm run AllReports
npm run Today-QrCodes
npm run Today-Orders
npm run Admin-AdminToday-QrCodes
npm run Admin-AdminToday-Orders
npm run Admin-Masters
npm run Admin-AdminAllDays-QrCodeWise-AsArray
npm run Admin-AdminAllDays-QrCodeWise-BranchWise
npm run Admin-AdminAllDays-QrCodeWise-BranchFilter
npm run Branch-Dashboard-QrCodeWise-AsArray
npm run Branch-Pos-Today-QrCodes
npm run Admin-AdminAllDays-CommonConfig-QrCode-AsArray

# Copy the publicDir to the target directory in CrudGenV2
rsync -av --progress ./publicDir/ ../CrudGenV2/public/Laundry

# Navigate to the CrudGenV2 directory
cd ../CrudGenV2
