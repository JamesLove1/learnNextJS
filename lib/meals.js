import sql from "better-sqlite3"

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