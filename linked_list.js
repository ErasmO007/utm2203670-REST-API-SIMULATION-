class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkList {

    constructor() {
        this.head = null
        this.tail = null
    }

/*inserta al final */ apend(data) {
        if (!data)
            return "No hay dato"
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }
/*inserta al incio*/ prepend(data) {
        if (!data)
            return "No hay dato"
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }

    }

    /*recorre una lista*/
    traverse(data) {
        const currentvalue = this.head
        while (currentvalue) {
            console.log(current.data)
            current = currentvalue.next
        }
    }
/*borrar un nodo */
    deleteNode(element) {
        if (!element || !this.head) {
            return "No hay parametro o lista";
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
                return "Elemento borrado";
            }
            current = current.next;
        }
        return "Elemento no encontrado";
    }


/*borrar la cabeza*/
        deleteHead() {
        if (!this.head) {
            return ("no hay")
        }
        this.head = this.head.next

        if (this.head === null) {
            this.tail = this.head
        }
    }

/*borrar la cola */
         insertTail() {
        if (!this.head) return "no hay lista"
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        }
        let current = this.head
        while (current.next) {
            if (current.next === this.tail) {
                this.tail = current
                return "la cola ha sido reasiganda "
            }
            current = current.next

        }

    }
/*insertar despues de un nodo */
    insertAfterNode(node, newNodeData) {
        if (!node) {
            console.log("El nodo proporcionado es nulo");
            return;
        }

        const newNode = new Node(newNodeData);
        newNode.next = node.next;
        node.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        }
    }
}

