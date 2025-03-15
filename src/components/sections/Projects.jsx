import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Projects = () => {
  const [viewed, setViewed] = useState(false);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition-all">
              <h3 className="text-xl font-bold mb-2">Dysphonia Classification</h3>
              <p className="text-gray-400 mb-4">
              Developed a voice disorder classification system by analyzing voice recordings collected through a Django web
              framework.
              </p>
              <p className="text-gray-400 mb-4">
              Designed and implemented an Artificial Neural Network (ANN) model for classifying voice disorders within
              24 hours during a hackathon among 50 teams.
              </p>
              <p className="text-gray-400 mb-4">
              Achieved 95% accuracy, showcasing the model's precision and effectiveness.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "Postgres", "Machine Learning","TensorFlow","HTML & CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/deepakreddyr/byteforbait_dysphonia_CR_09"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Stock Market Forecasting</h3>
              <p className="text-gray-400 mb-4">
              Built a Django-based web application to predict stock prices using machine learning models.
              </p>
              <p className="text-gray-400 mb-4">
              Applied algorithms such as LSTM, KNN, and Random Forest to analyze historical data and market trends,
              achieving an 85% accuracy rate.
              </p>
              <p className="text-gray-400 mb-4">
              Enhanced predictions through ensembling techniques to provide reliable stock price forecasts to users.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "Scikit-learn", "Django","API","HTML & CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/deepakreddyr/stock_price_prediction"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Malicious URL Detection</h3>
              <p className="text-gray-400 mb-4">
              Developed and deployed a machine learning-based system for detecting malicious URLs, achieving high accuracy.
              </p>
              <p className="text-gray-400 mb-4">
              Integrated the model into a browser extension for real-time detection and user protection.
              </p>
              <p className="text-gray-400 mb-4">
              Compared multiple models and selected a Hugging Face model that outperformed others in classification accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Javascript", "Python","Scikit-learn", "Flask",].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/deepakreddyr/malicious-url-detection-"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Sign Language Detection</h3>
              <p className="text-gray-400 mb-4">
              Designed and implemented a system for detecting sign language using machine learning and computer vision
              techniques.
              </p>
              <p className="text-gray-400 mb-4">
              Utilized frameworks such as OpenCV for image processing and classification.
              </p>
              <p className="text-gray-400 mb-4">
              Achieved an 82% accuracy rate, demonstrating the methodology's efficiency and applicability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "Tensorflow"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/deepakreddyr/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]
                transition-all
              "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                Developed and deployed a Portfolio Website
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Javascript"].map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/deepakreddyr/malicious-url-detection-"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents navigation
                    setViewed(true);
                  }}
                >
                  {viewed ? "You're looking at it" : "View Project →"}
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
