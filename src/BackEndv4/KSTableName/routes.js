import express from 'express';

var router = express.Router();

import { router as Show } from './Show/routes.js';
import { router as Create } from './Create/routes.js';
import { router as Alter } from './Alter/routes.js';
import { router as Delete } from './Delete/routes.js';
import { router as Upload } from './Upload/routes.js';
import { router as Mail } from './Mail/routes.js';
import { router as Images } from './Images/routes.js';
import { router as Search } from './Search/routes.js';
import { router as Bulk } from './Bulk/routes.js';
import { router as ShowWithColumns } from './ShowWithColumns/routes.js';
import { router as Sort } from './Sort/routes.js';
import { router as RowShow } from './RowShow/routes.js';
import { router as Filter } from './Filter/routes.js';
import { router as SearchForStatus } from './SearchForStatus/routes.js';

import { router as SubTable } from './SubTable/routes.js';

router.use('/Show', Show);
router.use('/Create', Create);
router.use('/Alter', Alter);
router.use('/Delete', Delete);
router.use('/Upload', Upload);
router.use('/Mail', Mail);
router.use('/Images', Images);
router.use('/Search', Search);
router.use('/Bulk', Bulk);
router.use('/ShowWithColumns', ShowWithColumns);
router.use('/Sort', Sort);
router.use('/RowShow', RowShow);
router.use('/Filter', Filter);
router.use('/SearchForStatus', SearchForStatus);

router.use('/SubTable', SubTable);

export { router };