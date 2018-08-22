const app = feathers();

const myService = {
    // Main service function async get
    async get(id) {
        // Return an object in the form of { name, text }
        return {id: id, text: this.messages}
    },
    messages: [],

    // Mutation
    create(data, params) {
        this.messages.push(data);

        return Promise.resolve(data);
    }
}
// Register a simple todo service that returns the name and some text
app.use('todos', myService);

// A function that gets and logs a todo from the service
async function getTodo(id, name) {
    // Get the service we registered above
    const service = app.service('todos');
    service.create({id: id, text: name});
    // Call the `get` method with a name
    const todo = await service.get(id);

    // Log the todo we got back
    console.log(todo);
}

console.log('test');
getTodo(2, 'hayden');