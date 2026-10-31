import { useState } from "react";

const emptyForm = { name: '', category: '', instructions: '', ingredients: '', image: '' }

export default function RecipeForm({ onAddRecipe, categories = [] }) {
    const [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name.trim() || !form.instructions.trim() || !form.ingredients.trim() || !form.category) return
        onAddRecipe({ id: crypto.randomUUID(), ...form, ingredients: form.ingredients.split('\n').map((i) => i.trim()).filter(Boolean), })
        setForm(emptyForm)
    }

    return (
        <form className="recipe-form" onSubmit={handleSubmit}>

            <div className="form-group">

                <input name="image" value={form.image} onChange={handleChange} placeholder="Url de la imagen platillo..." />
            </div>

            <div className="form-group">
                <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre del platillo" />
            </div>

            <div className="form-group">
                            <select name="category" value={form.category} onChange={handleChange}>
                <option value="">Elige una una categoria</option>
                {categories.map((name) => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            </div>

            <div className="form-group">
                <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Instrucciones..." />
            </div>

             <div className="form-group">
                <textarea name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingredientes..." />
            </div>

            <button className="btn-submit" type="submit">Agregar</button>
        </form>
    )
}