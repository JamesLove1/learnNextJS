import sql from "better-sqlite3"
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals(){
    // await new Promise((resolve)=> setTimeout(resolve, 5000))

    // throw new Error("Loading meals failed")
    return db.prepare("select * from meals").all();
}

export function getMeal(slug) {
    
    let res = db.prepare('select * from meals WHERE slug = ?')
    .get(slug); 
    
    return res 
    
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);
}