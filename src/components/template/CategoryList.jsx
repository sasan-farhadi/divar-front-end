import { useQuery } from "@tanstack/react-query"
import { getCategory } from "services/main"
import Loader from "../module/Loader"
import styles from './CategoryList.module.css'

const CategoryList = () => {
    const { data, isLoading } = useQuery(["get-categories"], getCategory)
    console.log(data, isLoading)
    return (
        <div className={styles.list}>
            {isLoading ? <Loader /> :
                data.data.map(x => (
                    <div key={x._id}>
                        <img src={`${x.icon}.svg`} />
                        <h5>{x.name}</h5>
                        <p>slug: {x.slug}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryList
