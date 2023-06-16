import { createContext, useState, useEffect } from "react";
import api from '../api/post';
import { useNavigate } from 'react-router-dom';
import post from "../api/post";



const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const navigate = useNavigate();
    const [posts, Setpost] = useState([]);
    const [Search, setSearch] = useState("");
    const [Searchres, setSearchres] = useState([]);
    const [Title, Settitle] = useState("");
    const [postBody, setpostBody] = useState("");
    const [editTitle, seteditTitle] = useState("");
    const [editBody, seteditBody] = useState("");

    useEffect(() => {
        const fetcher = async () => {
            try {
                const response = await api.get('/posts');
                Setpost(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data)
                }
            }
        }
        fetcher();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const new_post = { id, title: Title, body: postBody };
        try {
            const response = await api.post('/posts', new_post);
            const new_post_array = [...posts, response.data];
            Setpost(new_post_array);
            Settitle('');
            setpostBody('');
            navigate('/');
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
            }
        }

    }


    const handleDelete = async (id) => {
        try {
            await api.delete(`/posts/${id}`);
            const deleted = posts.filter(post => post.id !== id);
            Setpost(deleted);
            navigate('/');
        }
        catch (err) {
            alert(err);
        }
    }

    const handleEdit = async (id) => {
        const updated_value = { id, title: editTitle, body: editBody }

        try {
            const response = await api.put(`/posts/${id}`, updated_value);
            Setpost(posts.map(post => post.id === id) ? [...posts, response.data] : post)
            seteditTitle('')
            seteditBody('')
            navigate('/');
        } catch (err) {
            console.log(err);
        }

    }


    useEffect(() => {

        const filteredResult = posts.filter(post =>

            ((post.body).toLowerCase()).includes(Search.toLowerCase())
            || ((post.title).toLowerCase()).includes(Search.toLowerCase()));

        setSearchres(filteredResult.reverse());
    }, [posts, Search]);


    return (
        <DataContext.Provider value={{
            Search, setSearch, posts, handleDelete, Title, Settitle, postBody, setpostBody, handleSubmit, editTitle, seteditTitle, editBody, seteditBody, handleEdit,Searchres
        }}>
            {children}
        </DataContext.Provider>
    )

}

export default DataContext;