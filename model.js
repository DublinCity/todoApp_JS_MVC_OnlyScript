(function(exports) {
    function TodosModel(){
        this.textState= ''
        this.todos = [{
            title:"tmon"
        },{
            title:"rnrjsah"
        },{
            title:"rokyoung"
        },]
    }

    TodosModel.prototype = {
        setInputState(text) {
            this.textState = text;
        },
        addTodo() {
            todo = {
                title: this.textState
            }
            this.todos.push(todo);
            this.setInputState('');
        },
        removeTodo(index) {
            this.todos.splice(index,1);
        },
        getTodos(){
            return this.todos;
        }
    }
    exports.TodosModel = TodosModel
})(this)