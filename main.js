const feathers = require('@feathersjs/feathers');
const app = feathers();

// Register a simple todo service that returns the name and some text
app.use('todos', {
    async get(a) {
        // Return an object in the form of { name, text }
        return {
            a0: a[0],
            a1: a[1],
            text: `You have to do ${a[0]} and ${a[1]}`
        };
    }
});

// A function that gets and logs a todo from the service
async function getTodo(...a) {
    // Get the service we registered above
    const service = app.service('todos');
    // Call the `get` method with a name
    const todo = await service.get(a);

    // Log the todo we got back
    console.log(todo);
}

getTodo(3, 4);