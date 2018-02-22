(function(exports){
    function TodosView(){
    }
    
    TodosView.prototype = {
        render(todos){
            return todos.map((todo,i) => {
                return `
                <div><span>${todo.title}</span>
                <button class="btn-remove" name=${i}> X </button></div>`
            }).join('')
        }
    }
    exports.TodosView = TodosView
})(this)