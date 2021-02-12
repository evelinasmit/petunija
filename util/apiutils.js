import Recipe from '../models/recipe';
const cheerio = require('cheerio')

class ApiUtils {
  static queryString(params) {
    return params.join('+')
  }
  static parseRecipes(data) {
    let recipes = []
    const $ = cheerio.load(data);
    let els = $('#lazy-container .item')
    els.each((i, el) => {
      recipes.push(new Recipe(
        $(el).find('img').attr('alt'), //name
        $(el).find('img').attr('src'), //image
        $(el).find('a').attr('href') //link
      ))
    })
    return recipes;
  }
}
export default ApiUtils;