function createCategoryPrompt(name, description){

return `
You are an AI assistant for a sustainable ecommerce platform.

Product Name: ${name}
Description: ${description}

Choose a category and sub category.

Categories:
Home
Personal Care
Kitchen
Packaging
Office

Also generate:
- 5 to 10 SEO tags
- sustainability filters like plastic-free, compostable, vegan, recycled

Return STRICT JSON:

{
 "primary_category":"",
 "sub_category":"",
 "seo_tags":[],
 "sustainability_filters":[]
}
`
}

module.exports = createCategoryPrompt;