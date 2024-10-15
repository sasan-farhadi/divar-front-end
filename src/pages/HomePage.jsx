import { useQuery } from "@tanstack/react-query"
import Main from "components/template/Main"
import Sidebar from "components/template/Sidebar"
import Loader from "components/module/Loader"
import { getAllPosts } from "services/user"
import { getCategory } from "src/services/main"

const style = { display: "flex" }

const HomePage = () => {
    const { data: posts, isLoading: postLoading } = useQuery(["post-list"], getAllPosts)
    const { data: categories, isLoading: categoryLoading } = useQuery(["get-categories"], getCategory)

    return (
        <>
            {postLoading || categoryLoading ? <Loader /> : (<div style={style}>
                <Sidebar categories={categories} />
                <Main posts={posts} />
            </div>)}
        </>
    )
}

export default HomePage
