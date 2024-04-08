import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify/products"

interface CategoriesProps {
    params: {
        categories: string[]
        searchParams: string
    }
}

export default async function Categories(props: CategoriesProps){
    const products = await getProducts()
    const { categories } = props.params
    // throw new Error('Error:Boom!')
    return(
        <ProductsWrapper products={products}/>
    );
}