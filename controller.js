(function(exports){
    function TodosController(){
       this.todosModel = new TodosModel();
       this.todosView = new TodosView()
    
       this.inputText = document.querySelector('.input-text')
       this.btnAdd = document.querySelector('.btn-add')
       this.todosList = document.querySelector('.todos-list');
       
       this.todosList.innerHTML = this.todosView.render(this.todosModel.getTodos());
       
       this.inputText.addEventListener('keyup',(e) => this.onKeypessInput(e.target.value))
       this.btnAdd.addEventListener('click',(e) => this.onClickAddBtn())
       this.todosList.addEventListener('click',(e) => {
           if(e.target.className === "btn-remove"){
            this.onClickRemove(e.target.name)
           }
        }) 
          
    }
    
    TodosController.prototype = {
        onKeypessInput(text) {
            this.todosModel.setInputState(text)
        },
        onClickAddBtn() {
            this.todosModel.addTodo();
            this.render()
            this.inputText.value ="";
        },
        onClickRemove(index) {
            this.todosModel.removeTodo(index);
            this.render();
        },
        render(){
            this.todosList.innerHTML = this.todosView.render(this.todosModel.getTodos());
        }
    }
    exports.TodosController = TodosController;
})(this)