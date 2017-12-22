import { ADD_REMINDER, DELETE_REMINDER, RANDOMIZE_REMINDERS } from '../constants'


export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log('action in addReminder', action);
    return action;
}

export const randomizeReminder = () => {
    const action = {
        type: RANDOMIZE_REMINDERS
    }
    console.log('action in randomizeReminder', action);
    return action;
}




export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
}

export default addReminder;