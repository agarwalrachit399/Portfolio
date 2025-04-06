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
       <div className="bg-purple-600 text-white px-6 sm:px-12 md:px-24 lg:px-48 xl:px-64 2xl:px-80 py-16 sm:py-24 lg:py-32 shadow-lg">
  <p className="text-lg font-bold">Hi, I’m Rachit. Nice to meet you.</p>
  <p className="mt-4">
    Currently pursuing a Master's degree in Computer Science at USC, I am focused on deepening my expertise in computing 
    fundamentals and specializing in data science applications. I am passionate about leveraging technology
    to solve real-world problems and am particularly interested in the evolving landscape of large language models (LLMs). I am actively 
    seeking opportunities to apply my knowledge and skills in a dynamic environment that fosters personal and professional growth.
  </p>
</div>

<div className="flex justify-center mt-[-50px] mb-20">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-screen-xl w-full px-4 items-stretch">
    {/* Card 1 */}
    <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center h-full">
    <div className="mb-4 w-[70px] h-[70px] rounded-full bg-emerald-300 flex items-center justify-center">
    <Image src='/software-eng.svg' alt="Logo 2" width={40} height={40} />
</div>
      <h3 className="text-xl font-semibold text-center">Software Developer</h3>
      <p className="text-gray-600 text-center mt-4">I love to code from scratch and turn ideas into reliable, efficient code.</p>
      <p className="text-purple-600 text-center mt-8">Languages I speak:</p>
      <p className="text-gray-600 text-center mt-2">HTML, CSS, Git, JavaScript, TypeScript, Python, SQL, NoSQL, Bash</p>
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
    <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center h-full">
    <div className="mb-4 w-[70px] h-[70px] rounded-full bg-emerald-300 flex items-center justify-center">
    <Image src='/ml.svg' alt="Logo 2" width={40} height={40} />
</div>

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
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-lg shadow-md p-6 w-full flex flex-col items-center h-full">
    <div className="mb-4 w-[70px] h-[70px] rounded-full bg-emerald-300 flex items-center justify-center">
    <Image src='/data-analysis.svg' alt="Logo 2" width={40} height={40} />
</div>
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


