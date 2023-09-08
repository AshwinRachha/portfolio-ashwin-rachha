import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

// The list of URLs
const urls = [
  "https://ashwinrachha.github.io/home/",
  "https://medium.com/@ashwin_rachha/addition-and-subtraction-using-recurrent-neural-networks-3bb0d0b2cb86",
  // ...
];

// The array to store the extracted data
const extractedData = [];

// Loop through the list of URLs
urls.forEach(async (url) => {
  try {
    // Create a new loader instance with the URL
    const loader = new CheerioWebBaseLoader(url);
    // Load the document
    const doc = await loader.load();
    // Extract the data
    const data = doc.extract({
      title: "title",
      author: "meta[name='author']",
    });
    // Push the data into the array
    extractedData.push(data);
  } catch (error) {
    // Handle any errors
    console.error(error);
  }
});

// Do something with the extracted data
console.log(extractedData);