import { ADD_REMINDER, DELETE_REMINDER, RANDOMIZE_REMINDERS } from '../constants';


const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}


const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    console.log('new reduced reminders', reminders);
    return reminders;
}

const randomizer = (state = []) => {
    const reminders = state.map((a) => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map((a) => a[1]);
    return reminders;
}


const reminders = (state = [], action) => {
    let reminders = null

    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)]
            console.log('reminders as state', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            console.log('reminders as state', reminders);
            return reminders;
        case RANDOMIZE_REMINDERS:
            reminders = randomizer(state);
            console.log('reminders as state', reminders);
            return reminders;
        default:
            return state;
    }

}

export default reminders;  