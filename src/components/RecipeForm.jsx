import { useState } from "react";
import { useEffect } from "react";

const emptyForm = { name: '', category: '', instructions: '', ingredients: '', image: '' }

const requiredFields = [
    { key: 'name', label: 'el nombre' },
    { key: 'category', label: 'la categoría' },
    { key: 'ingredients', label: 'los ingredientes' },
    { key: 'instructions', label: 'las instrucciones' },
]

export default function RecipeForm({ onAddRecipe, categories = [] }) {
    const [form, setForm] = useState(emptyForm)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // El mensaje de éxito se apaga solo a los 3 segundos
    useEffect(() => {
        if (!success) return
        const timer = setTimeout(() => setSuccess(''), 3000)
        return () => clearTimeout(timer)
    }, [success])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('') // al corregir, el aviso desaparece
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess('')

        const missing = requiredFields.filter(({ key }) => !form[key].trim())
        if (missing.length > 0) {
            setError(`Falta: ${missing.map((f) => f.label).join(', ')}`)
            return
        }

        onAddRecipe({
            id: crypto.randomUUID(),
            ...form,
            ingredients: form.ingredients.split('\n').map((i) => i.trim()).filter(Boolean),
        })
        setForm(emptyForm)
        setError('')
        setSuccess('Receta agregada correctamente')
    }
    return (
        <form className="recipe-form" onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="image">Imagen</label>
                <input name="image" value={form.image} onChange={handleChange} placeholder="Url de la imagen de la receta" />
            </div>

            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Carbonara tradicional" />
            </div>

            <div className="form-group">
                <label htmlFor="category">Categoría</label>
                <select name="category" value={form.category} onChange={handleChange}>
                    <option value="">Seleccionar categoría</option>
                    {categories.map((name) => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="instructions">Instrucciones</label>
                <textarea name="instructions" value={form.instructions} onChange={handleChange} placeholder="Ingresar instrucciones..." />
            </div>

            <div className="form-group">
                <label htmlFor="ingredients">Ingredientes</label>
                <textarea name="ingredients" value={form.ingredients} onChange={handleChange} placeholder="Ingresar ingredientes..." />
            </div>

            {error && <p className="form-error" role="alert">{error}</p>}
            {success && <p className="form-success" role="status">{success}</p>}

            <button className="btn-submit" type="submit">Agregar</button>
        </form>
    )
}