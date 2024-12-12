import express from 'express';
import { getUserOrganizations, createOrganization, updateOrganization, deleteOrganization } from './controllers';

const router = express.Router();

router.get('/user', getUserOrganizations);
router.post('/', createOrganization);
router.put('/:id', updateOrganization);
router.delete('/:id', deleteOrganization);

export const organizationRoutes = router;
