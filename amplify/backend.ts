import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';

const backend = defineBackend({
  auth,
  data,
});

backend.auth.resources.userPool.addDomain('cognito-domain', {
  cognitoDomain: {
    domainPrefix: 'nxt-torenken',
  }
})
