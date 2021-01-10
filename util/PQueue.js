// https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
class QElement { 
	constructor(element, priority) { 
		this.element = element; 
		this.priority = priority; 
	} 
} 

class PriorityQueue { 
	constructor() { 
		this.items = []; 
	} 

    enqueue(element, priority) { 
        var qElement = new QElement(element, priority); 
        var contain = false; 

        // iterating through the entire item array to add element at the correct location of the Queue 
        for (var i = 0; i < this.items.length; i++) { 
            if (this.items[i].priority > qElement.priority) { 
                // Once the correct location is found it is enqueued 
                this.items.splice(i, 0, qElement); 
                contain = true; 
                break; 
            } 
        } 

        // if the element have the highest priority, it is added at the end of the queue 
        if (!contain) { 
            this.items.push(qElement); 
        } 
    } 

    dequeue() { 
        if (this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 

    front() {
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 

    rear() {
        if (this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[this.items.length - 1]; 
    } 

    isEmpty() { 
        return this.items.length == 0; 
    }

    printPQueue() {
        console.log(this.items.map((e) => e.element).join(" "));
    }
}

module.exports = { PriorityQueue }