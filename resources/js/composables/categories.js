import {ref} from 'vue'
import axios from "axios";

export default function useCategories() {
    const categories = ref({})

    const getCategories = async(page = 1) =>{
        axios.get('api/categories?page='+ page)
            .then(response => {
                categories.value = response.data.data;
            })
    }


    return { categories, getCategories }

}
