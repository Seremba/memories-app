import {createStore} from 'vuex';

const store = createStore({
    state(){
        return {
            memories: [
                {
                    id: 'm1',
                    title: 'A trip into the mountains',
                    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                    description: 'what a wonderful moment'  
                },
                {
                    id: 'm2',
                    title: 'Swimming in the lake',
                    image: 'https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1292&q=80',
                    description: 'this is so cool'
                },
                {
                    id: 'm3',
                    title: 'Sex in the Camp',
                    image: 'https://images.unsplash.com/photo-1524706088418-1b1ce0a23b20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1188&q=80',
                    description: 'Bino byanyumye luno hoo'
                }
            ]
        }

    },
    mutations: {
        addMemory(state, memoryData){
            const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description
         };
         
         state.memories.unshift(newMemory)
      }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state){
            return state.memories
        },
        memory(state) {
           return (memoryId) => {
               return state.memories.find((memory) => memory.id === memoryId)
           };
        }
    }
});

export default store;