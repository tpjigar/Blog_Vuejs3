import {ref} from 'vue'
import axios from "axios";

export default function usePosts() {
    const posts = ref({})

    const getPosts = async(page = 1) =>{
        axios.get('api/posts?page='+ page)
            .then(response => {
                posts.value = response.data;
            })
    }


    return { posts, getPosts }

}
