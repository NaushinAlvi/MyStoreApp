import {useState} from "react";
import Layout from "@/components/Layout";
import axios from "axios";


export default function NewProduct(){
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(''); 
    async function createProduct(){
        const data = {title,description,price};
        await axios.post('/api/products', data);
     }
    return (
       <Layout>
        <form onSubmit={createProduct}>
        <h1><b>New Product</b></h1>
        <label>Product name</label>
        <input 
        type="text" 
        placeholder="product name"
        value={title}
        onChange={ev => setTitle(ev.target.value)}/>
        <label>Description</label>
        <textarea placeholder="description"
        value={description}
        onChange={ev => setDescription(ev.target.value)}>
        </textarea>
        <label>Price (in INR)</label>
        <input 
        type="number" 
        placeholder="price"
        value={price}
        onChange={ev => setPrice(ev.target.value)}/>
        <button type="submit" className="btn-primary">Save</button>
        </form>
       </Layout>
    )
}