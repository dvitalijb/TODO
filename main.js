class Todo {
    constructor() {
        this.list = {};
        this.listUniqueId = 0;
    }

    addItem(title, priority) {
        this.listUniqueId++;
        this.list[this.listUniqueId] = {title, priority};
        return this.listUniqueId;
    }

    removeItem(id) {
        if (this.list[id] === undefined) {
            return false
        }
        delete this.list[id];
        console.log(this.list, this.list[id])
        return true;
    }

    getItem(id) {
        if (this.list[id] === undefined) {
            return null;
        }
        return this.list[id];
    }

    next() {
        try {
            if (Object.keys(this.list).length === 0) {
                throw new Error('No items')
            }
            console.log(this.listUniqueId[1]);
            let highestPriority = {id: 1, title: this.list.title, priority: this.list.priority};
            for (let key in this.list) {
                if (this.list[key].priority > highestPriority.priority) {
                    highestPriority = {id: key, title: this.list[key].title, priority: this.list[key].priority};
                }
            }
            return highestPriority;
        } catch (e) {
            console.log(e);
            return false;
        }

    }
}