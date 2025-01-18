// app/page.tsx
import Image from 'next/image';
// bg-gray-100
const HomePage = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-32">
      <h1 className="text-5xl font-bold mb-4">Software Engineer | Innovative Thinker</h1>
      <p className="text-lg mb-8">I design and code beautifully simple things, and I love what I do.</p>
      
      {/* Circular Image */}
      <div className="mb-8">
        <Image
          src="/profile-picture.png" // Update this path to your image
          alt="Your Name"
          width={200} // Adjust size as needed
          height={200} // Adjust size as needed
          className="rounded-full border-4 border-gray-300" // Circular image styling
        />
      </div>
      
      {/* Additional Image */}
      <Image
        src="/hero-devices.svg" // Update this path to your second image
        alt="Another Description"
        width={800} // Adjust size as needed
        height={500} // Adjust size as needed
         // Optional styling for the image
      />
       <div className="bg-purple-600 text-white px-96 py-32 shadow-lg">
        <p className="text-lg font-bold">Hi, I’m Rachit. Nice to meet you.</p>
        <p className="mt-4">
        Currently pursuing a Master's degree in Computer Science at USC, I am focused on deepening my expertise in computing 
        fundamentals and specializing in data science applications. I am passionate about leveraging technology
        to solve real-world problems and am particularly interested in the evolving landscape of large language models (LLMs). I am actively 
        seeking opportunities to apply my knowledge and skills in a dynamic environment that fosters personal and professional growth.
        </p>
      </div>

      <div className="flex justify-center mt-[-50px] mb-20"> {/* Negative margin for overlap effect */}
        <div className="flex max-w-40xl px-4"> {/* Container for cards */}
          {/* Card 1 */}
          <div className="bg-white rounded-l-lg shadow-md p-6 w-[400px] flex flex-col items-center">
            <Image
              src="/logo1.png" // Update with your logo path
              alt="Logo 1"
              width={80} // Adjust size as needed
              height={80} // Adjust size as needed
              className="mb-4" // Add margin below logo
            />
            <h3 className="text-xl font-semibold text-center">Software Developer</h3>
            <p className="text-gray-600 text-center mt-4">I love to code from scratch and turn ideas into reliable, efficient code.</p>
            <p className="text-purple-600 text-center mt-8">Languages I speak:</p>
            <p className="text-gray-600 text-center mt-2"> HTML, CSS, Git, JavaScript, TypeScript, Python, SQL, NoSQL, Bash</p>
            <p className="text-purple-600 text-center mt-8">Dev Frameworks and Tools:</p>
            <div className="mt-2 text-left flex flex-col items-center space-y-2">
              <p>Node.js</p>
              <p>React</p>
              <p>Angular</p>
              <p>NextJs</p>
              <p>RestAPI</p>
              <p>Tailwind CSS</p>
              <p>Docker</p>
              <p>GCP-App Engine</p>
              <p>Unit Testing</p>
            </div>
            
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 w-[400px] flex flex-col items-center">
            <Image
              src="/logo1.png" // Update with your logo path
              alt="Logo 2"
              width={80} // Adjust size as needed
              height={90} // Adjust size as needed
              className="mb-4" // Add margin below logo
            />
            <h3 className="text-xl font-semibold text-center">Machine Learning Engineer</h3>
            <p className="text-gray-600 text-center mt-4">I enjoy crafting models to solve real-world challenges.</p>
            <p className="text-purple-600 text-center mt-8">Languages I speak:</p>
            <p className="text-gray-600 text-center mt-2">Python, C++, Scala, MATLAB, SQL</p>
            <p className="text-purple-600 text-center mt-8">Dev Frameworks and Tools:</p>
            <div className="mt-2 text-left flex flex-col items-center space-y-2">
              <p>Pytorch</p>
              <p>Keras</p>
              <p>Scikit-Learn</p>
              <p>Langchain</p>
              <p>HuggingFace</p>
              <p>Flask</p>
              <p>Streamlit</p>
              <p>MLflow</p>
              <p>Apache Spark Mlib</p>
              <p>Docker</p>
              {/* Add more skills as needed */}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-r-lg shadow-md p-6 w-[400px] flex flex-col items-center">
            <Image
              src="/logo1.png" // Update with your logo path
              alt="Logo 3"
              width={80} // Adjust size as needed
              height={80} // Adjust size as needed
              className="mb-4" // Add margin below logo
            />
            <h3 className="text-xl font-semibold text-center">Data Analyst</h3>
            <p className="text-gray-600 text-center mt-4">I love digging into data, shaping raw information into meaningful stories</p>
            <p className="text-purple-600 text-center mt-8">Languages I speak:</p>
            <p className="text-gray-600 text-center mt-2">SQL, Python, MATLAB, Scala</p>
            <p className="text-purple-600 text-center mt-8">Design Tools:</p>
            <div className="mt-2 text-left flex flex-col items-center space-y-2">
              <p>Apache Hadoop</p>
              <p>Apache Spark</p>
              <p>Airflow Kafka</p>
              <p>Airflow Airflow</p>
              <p>dbt</p>
              <p>Tableau</p>
              <p>Plotly</p>
              <p>Snowflake</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;


