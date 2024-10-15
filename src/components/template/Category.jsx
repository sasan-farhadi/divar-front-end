import { useState } from "react"
import styles from './Category.module.css'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCategory } from "services/main"
const Category = () => {
    const queryClient = useQueryClient()

    const [form, setForm] = useState({ name: "", slug: "", icon: "" })

    const { mutate, isLoading, error, data } = useMutation(addCategory, {
        onSuccess: () => queryClient.invalidateQueries("get-categories")
    })

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        if (!form.name || !form.slug || !form.icon) return
        mutate(form)
    }
    return (
        <form onSubmit={submitHandler} onChange={changeHandler} className={styles.form}>
            <h3>دسته بندی جدید</h3>
            {!!error && <p>مشکلی پیش آمده است</p>}
            {data?.status === 201 && <p style={{ background: "green" }}>دسته بندی با موفقیت اضافه شد</p>}
            <label htmlFor="name">نام دسته بندی</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="slug">اسلاگ</label>
            <input type="text" name="slug" id="slug" />
            <label htmlFor="icon">آیکون</label>
            <input type="text" name="icon" id="icon" />
            <button type="submit" disabled={isLoading}>ایجاد</button>
        </form>
    )
}

export default Category
