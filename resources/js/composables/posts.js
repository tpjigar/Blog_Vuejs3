import {ref} from 'vue'
import axios from "axios";

export default function usePosts() {
    const posts = ref([])

    const getPosts = async() =>{
        axios.get('api/posts')
            .then(response => {
                posts.value = response.data.data;
            })
    }


    return { posts, getPosts }

}
