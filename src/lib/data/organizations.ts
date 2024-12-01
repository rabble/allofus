import type { Organization } from './types';
import { initialOrganizations } from './organizations/initial-organizations';
import { newOrganizations } from './organizations/new-organizations';
import { movementOrganizations } from './organizations/movement-organizations';
import { justiceOrganizations } from './organizations/justice-organizations';
import { justiceOrganizations2 } from './organizations/justice-organizations-2';
import { communityOrganizations } from './organizations/community-organizations';
import { faithOrganizations } from './organizations/faith-organizations';
import { housingOrganizations } from './organizations/housing-organizations';
import { palestineOrganizations } from './organizations/palestine-organizations';
import { democracyOrganizations } from './organizations/democracy-organizations';
import { democracyOrganizations2 } from './organizations/democracy-organizations-2';
import { lgbtqFeministOrganizations } from './organizations/lgbtq-feminist-organizations';
import { feministOrganizations } from './organizations/feminist-organizations';
import { reproductiveOrganizations } from './organizations/reproductive-organizations';
import { economicOrganizations } from './organizations/economic-organizations';
import { foodOrganizations } from './organizations/food-organizations';
import { healthcareOrganizations } from './organizations/healthcare-organizations';
import { youthOrganizations } from './organizations/youth-organizations';
import { indigenousOrganizations } from './organizations/indigenous-organizations';
import { electoralOrganizations } from './organizations/electoral-organizations';
import { educationOrganizations } from './organizations/education-organizations';
import { internationalOrganizations } from './organizations/international-organizations';
import { digitalOrganizations } from './organizations/digital-organizations';
import { deduplicateOrganizations } from '../utils/organizationUtils';

const allOrganizations = [
  ...initialOrganizations,
  ...newOrganizations,
  ...movementOrganizations,
  ...justiceOrganizations,
  ...justiceOrganizations2,
  ...communityOrganizations,
  ...faithOrganizations,
  ...housingOrganizations,
  ...palestineOrganizations,
  ...democracyOrganizations,
  ...democracyOrganizations2,
  ...lgbtqFeministOrganizations,
  ...feministOrganizations,
  ...reproductiveOrganizations,
  ...economicOrganizations,
  ...foodOrganizations,
  ...healthcareOrganizations,
  ...youthOrganizations,
  ...indigenousOrganizations,
  ...electoralOrganizations,
  ...educationOrganizations,
  ...internationalOrganizations,
  ...digitalOrganizations
];

export const organizations = deduplicateOrganizations(allOrganizations);