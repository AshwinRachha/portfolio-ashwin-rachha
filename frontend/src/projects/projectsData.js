import projectOne from "../assets/project-1.jpg";
import projectTwo from "../assets/project-2.jpg";
import projectThree from "../assets/project-3.jpg";
import projectFour from "../assets/project-4.jpg";
import projectFive from "../assets/project-5.jpg";
const projects = {
  1: {
    title: "Gurukul Adaptive Learning Platform using Large Language Models. [Python, Pytorch, Transformers, Huggingface, Gradio]",
    image: projectOne,
    description: (
      <>
        <p>
        ● A transformer based Natural Language Explanation project trained using LLMs(Large Language Models - CodeT5) which converts
          any given python code and generates explanations for it like ChatGPT. Fine tuned using Pytorch and deployed on Huggingface spaces
        </p>
      </>
    ),
    github: "https://github.com/AshwinRachha/Gurukul",
    demo: "https://netlify.com",
  },
  2: {
    title: "Hemingway [Python, Kubernetes, Docker, Flask, MySQL, RabbitMQ, MongoDB]",
    image: projectTwo,
    description: (
      <>
        <p>
        ● A one stop NLP web application to summarize, analyze and paraphrase text written using Python, Transformers, Streamlit.
        </p>
      </>
    ),
    github: "https://github.com/AshwinRachha/TextSummarization",
    demo: "https://netlify.com",
  },
  3: {
    title: "Code Mentor",
    image: projectThree,
    description: (
      <>
        <p>
        ● Designed and implemented a Code Mentor system at Code Mentor, leveraging CodeBERT and CodeT5 models to provide detailed explanations for LeetCode solutions and recommend similar coding challenges based on vector embedding similarity.
        </p>
      </>
    ),
    github: "https://github.com/AshwinRachha/CodeMentor",
    demo: "https://netlify.com",
  },
  4: {
    title: "Distributed Video to Mp3 Converted",
    image: projectFour,
    description: (
      <>
        <p>
          ● Built an authenticated service for uploading, downloading and converting media files using microservices architecture facilitated by
          Pika and RabbitMQ. The application relies on Flask, PyMongo and GridFS to handle interactions with MongoDB.
        </p>
      </>
    ),
    github: "https://github.com/AshwinRachha/PythonMicroservices",
    demo: "https://netlify.com",
  },
  5: {
    title: "Virginia Tech Search and Summarization",
    image: projectFive,
    description: (
      <>
        <p>
        ● Developed a web search and summarization system at Virginia Tech utilizing an inverted index for efficient web page querying and Transformers-based summarization for content extraction.
        </p>
      </>
    ),
    github: "https://github.com/AshwinRachha/VT-Search",
    demo: "https://netlify.com",
  },
};

export default projects;