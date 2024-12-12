import { Router } from 'express';
import { auth } from '../middleware/auth';
import * as organizationController from '../controllers/organizations';

const router = Router();

router.get('/user', auth, organizationController.getUserOrganizations);
router.post('/', auth, organizationController.createOrganization);
router.put('/:id', auth, organizationController.updateOrganization);
router.delete('/:id', auth, organizationController.deleteOrganization);

export { router as organizationsRouter };
