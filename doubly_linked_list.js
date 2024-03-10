class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //insert to final
    append(data) {
        if (!data) {
            return "No hay dato";
        }
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.prev = this.tail;
        }
    }

    //insert to beggin
    prepend(data) {
        if (!data) {
            return "No hay dato";
        }
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            this.head = newNode;
            newNode.next = this.head;
        }
    }

    //scroll through a list
    traverse() {
        let currentvalue = this.head;
        while (currentvalue) {
            console.log(current.data);
            current = currentvalue.next;
        }
    }
    //delate node
    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parámetro o lista";
        }
        if (this.head.data === element) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;
            }
            return "El elemento indicado era la cabeza";
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === element) {
                if (current.next === this.tail) {
                    this.tail = current;
                    return "El elemento ingresado se ha borrado y era la cola";
                }
                current.next = current.next.next;
                current.next.prev = current;
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }

    //delate head
    deleteHead() {
        if (!this.head) {
            return "No hay";
        }
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }
    }

    //delate tail
    insertTail() {
        if (!this.head) return "No hay lista";

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }

        let current = this.tail;
        if (current.prev) {
            current.prev.next = null;
            this.tail = current.prev;
            return "La cola ha sido reasignada";
        }
    }

    //insert after node
    insertAfterNode(node, newNodeData) {
        if (!node) {
            console.log("El nodo proporcionado es nulo");
            return;
        }

        const newNode = new Node(newNodeData);
        newNode.prev = node;
        newNode.next = node.next;
        node.next = newNode;

        if (newNode.next !== null) {
            newNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
    }
}






