const InitialState = {
    List: [
        {
            id:1,
            name:"Camila Terry",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"50",
            favorite: false
        },
        {
            id:2,
            name:"Joel Williamson",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"men",
            image:"42",
            favorite: true
        },
        {
            id:3,
            name:"Deann Payne",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"67",
            favorite: false
        },
        {
            id:4,
            name:"Leona Hunte",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            gender:"women",
            image:"51",
            favorite: false
        }
    ],
    findContact: ""
    };

const reduser = (state = InitialState.List, action)=>{
    switch (action.type) {
        case "LIST":
            return state.List[action.payload]
        case "FAV":
            state.List[action.payload].favorite = !state.List[action.payload].favorite
            break;
        case "DEL":
                this.setState(state => {
                    const index = this.state.List.findIndex(elem => elem.id === action.payload);
              
                    const firstPart = this.state.List.slice(0, index);
                    const lastPart = this.state.List.slice(index + 1);
                    const newList = [...firstPart, ...lastPart];
              
                    return {
                      List: newList
                    };
                });
            break;

        default:
            break;
    }
}

export default reduser;