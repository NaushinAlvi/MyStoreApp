import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products(){
    return(
        <Layout>
            <Link className="bg-gray-500 text-white pt-0.5 pb-1 pr-2 pl-2  rounded-md" href={'/products/new'}>Add New Products</Link>
        </Layout>
    )
}