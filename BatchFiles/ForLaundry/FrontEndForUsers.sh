#!/bin/bash

# Navigate to the FrontEndForUsers directory
cd ../FrontEndForUsers

# Run the Users npm script
npm run Users

# Copy the LoginUsers directory to the target directory in CrudGenV2
rsync -av --progress ./publicDir/LoginUsers/ ../CrudGenV2/public/LoginUsers

# Navigate to the CrudGenV2 directory
cd ../CrudGenV2
