import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

interface Collection {
    id: string;
    handle: string;
    title: string;
}

export default async function Layout({ children }: { children: React.ReactNode }) {
    const collections: Collection[] = await getCollections();
    return (
        <main>
            <nav>
                {
                    collections.map((collection) => (
                        <Link key={collection.id} href={'/store/' + collection.handle}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    );
}