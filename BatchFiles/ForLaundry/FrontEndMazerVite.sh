#!/bin/bash

# Navigate to the FrontEndMazerVite directory
cd ../FrontEndMazerVite

# Run each npm script sequentially
npm run FromBranchVoucher
npm run FromBranchQrCodes
npm run WashingVoucher
npm run FromEntryQrCodes
npm run PressingQrCodes
npm run PressingVoucher
npm run CompletionVoucher
npm run CompletionQrCodes

# Copy the publicDir to the target directory in CrudGenV2
rsync -av --progress ./publicDir/ ../CrudGenV2/public/Laundry/Factory

# Navigate to the CrudGenV2 directory
cd ../CrudGenV2
