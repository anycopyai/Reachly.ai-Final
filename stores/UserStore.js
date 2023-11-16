// stores/UserStore.js
import { makeAutoObservable } from 'mobx';
import { auth } from '../lib/firebase'; // Adjust the path as needed
import { onAuthStateChanged } from 'firebase/auth';

class UserStore {
    user = null;
    loading = true;

    constructor() {
        makeAutoObservable(this);
        onAuthStateChanged(auth, (user) => {
            this.setUser(user);
            this.setLoading(false);
        });
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(loading) {
        this.loading = loading;
    }
}

export const userStore = new UserStore();
