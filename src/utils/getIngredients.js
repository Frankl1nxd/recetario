
export default function getIngredients(meal) {
    const mealList = []

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`]

        if (ingredient && ingredient.trim()) {
            mealList.push({ingredient: ingredient, measure: measure })
        }
    }

    return mealList
}
