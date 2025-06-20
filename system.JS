class SearchSuggestionSystem {
    constructor(products) {
        // Sort the products lexicographically
        this.products = products.sort();
    }

    getSuggestions(searchWord) {
        const suggestions = [];
        let prefix = "";

        for (let char of searchWord) {
            prefix += char;

            // Filter and take up to the first 3 matching products
            const matches = this.products.filter(product => product.startsWith(prefix)).slice(0, 3);
            suggestions.push(matches);
        }

        return suggestions;
    }
}

// Example usage:
const products = ["mobile", "mouse", "monkeypot", "monitor", "mousepad"];
const searchWord = "mouse";

const system = new SearchSuggestionSystem(products);
console.log(system.getSuggestions(searchWord));

/*
Expected Output:
[
  ["mobile", "monkeypot", "monitor"],
  ["mobile", "monkeypot", "monitor"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"],
  ["mouse", "mousepad"]
]
*/
