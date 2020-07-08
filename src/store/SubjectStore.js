import { writable } from 'svelte/store';
import {Subject} from "../model/Subject";

function createSubjectStore() {
    const { subscribe, set } = writable(Subject.load());
    return {
        subscribe,
        persist(subject) {
            set(subject);
            Subject.persist(subject)
        },
        clear(){
            set(null);
            Subject.clear()
        }
    }
}

export const SubjectStore = createSubjectStore();






