export class TodoList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         list : [],
      }
    }

    componentDidMount() {
        
        fetch('http://localhost:5000/todos/')
            .then(response => response.json())
            .then(todos => {
                //console.log(todos);
                let newList = todos.map( (todo)  => 
                    ({id : todo.id , item :  todo.title, createAt: new Date()})
                );
                //console.log(newList);
                this.setState({list: newList});
            });
    }  

    addToEnd = (event) => {
        let newCount = this.state.count ;
        const  newList = [ ...this.state.list ,
            {id : newCount,
            item: 'xxx',
            createAt: new Date(),
            }
        ];
        newCount = newCount + 1;
        this.setState({list: newList , count: newCount });

        console.log(this.state.list);


    }

    addToStart = (event) => {
        let newCount = this.state.count ;
        const  newList = [ 
            {id : newCount,
            item: 'xxx',
            createAt: new Date(), 
            },  ...this.state.list
        ];
        newCount = newCount + 1;
        this.setState({list: newList , count: newCount });
    }

    deleteRow = (index) => {
        this.state.list.splice(index,1);
        const newList = [...this.state.list];
        
        this.setState({list: newList});
    }

    changeRow = (index , newItem) => {
        /*const newList = [...this.state.list];
        newList[index] = newItem;
        this.setState({list: newList});
        */
        this.state.List[index] = newItem;
        this.setState({list: this.state.list});

    }

    sortByEerliest = () => {
        const newList =  this.state.list.sort((a,b) =>{
            return a.createAt - b.createAt;
        });
        this.setState({list: newList});
    }
    sortByLatest = () => {
        const newList =  this.state.list.sort((a,b) =>{
            return b.createAt - a.createAt;
        });
        this.setState({list: newList});
    }
    
    todo = {
        id : 0,
        item: '',
        createAt: new Date(),
    }

    