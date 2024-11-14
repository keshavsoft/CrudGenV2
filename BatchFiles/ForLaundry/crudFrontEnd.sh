#!/bin/bash

# Navigate to the crudFrontEnd directory
cd ../crudFrontEnd

# Run the Dashboard npm script
npm run Dashboard

# Copy the AllTables directory to the target directory in CrudGenV2
rsync -av --progress ./publicDir/AllTables/ ../CrudGenV2/public/crudFrontEnd/AllTables

# Navigate to the CrudGenV2 directory
cd ../CrudGenV2

