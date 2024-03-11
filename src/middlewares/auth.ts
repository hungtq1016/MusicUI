import type { NavigationGuardNext } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; 

export default async function auth({ next }: { next: NavigationGuardNext }) {
  const authStore = useAuthStore();

  const user = await authStore.checkAuth();

  if (!('id' in user)) {
    console.log('Not logged in');
    return next({ name: 'Login' });
  }

  return next();
}
