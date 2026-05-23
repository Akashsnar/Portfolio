import { Home } from "lucide-react";
import { Icons } from "../components/icons";

export const DATA = {
    name: "Akash Singh Narvariya",
    initials: "RS",
    url: "https://drive.google.com/file/d/1dLlcqLvAugZNzwyc-jr0x3pPMhyIkxH3/view?usp=sharing",
    location: "Bangalore, India",
    locationLink: "https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9539456,77.4661321,11z/data=!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9628669!4d77.577509!16zL20vMDljMTc?authuser=0&entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
    description:
        "Software Developer Engineer specializing in building scalable Backend systems, generative AI applications, and optimization workflows.",
    summary: "",
    avatarUrl: "/me.png",
    skills: [
        "Python",
        "Agentic AI",
        "AutoGen",
        "Crew AI",
        "SQL",
        "Tailwind CSS",
        "React",
        "Next.js",
        "FastAPI",
        "Flask",
        "Streamlit",
        "LangChain",
        "LangGraph",
        "Tensorflow",
        "Pandas",
        "Numpy",
        "Scikit-Learn",
        "Docker",
        "AWS",
        "Git",
        "GitHub Actions",
    ],
    navbar: [
        { href: "/", icon: Home, label: "Home" },
    ],
    contact: {
        email: "aksn0204@gmail.com",
        tel: "+91 7067971622",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/Akashsnar",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/akashnarvariya/",
                icon: Icons.linkedin,
                navbar: true,
            },
            LeetCode: {
                name: "LeetCode",
                url: "https://leetcode.com/u/Akash_si/",
                icon: Icons.leetcode,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
                navbar: false,
            },
        },
    },
    work: [
        {
            company: "Sustainability Economics.ai",
            href: "https://sustainabilityeconomics.ai",
            badges: [],
            location: "Bengaluru, Karnataka",
            title: "Software Developer Engineer",
            logoUrl: "/assets/company/SE1_new_logo.png",
            start: "Feb 2025",
            end: "Present",
            description: [
                "<b>Built scalable energy optimization systems across 20+ global markets, designing production-grade ML pipelines and distributed compute workflows.</b>",
                "Engineered <b>energy optimization models</b> across <b>20+ countries</b>, adapting to diverse market structures, regulatory policies, and transmission/distribution cost models",
                "Designed a <b>TypeScript-based centralized API gateway<b> with <b>JWK auth-token validation</b> and <b>AWS Cognito</b>.",
                "Refactored service layer into <b>AWS Lambda-based serverless architecture</b>, eliminating traditional repository abstraction and reducing infrastructure overhead while improving scalability and cost efficiency.",
                "Constructed scalable microservices using <b>NOde.js, TypeScript, Redis, and AWS SQS</b> for asynchronous job processing, reducing response time by <b>~40%</b>.",
                "Automated output delivery via <b>GZIP-compressed messaging</b>, improving data transfer speed by <b>40%</b> across distributed systems.",
                "Implemented a multi-region backend architecture across multiple AWS regions, improving user data security, system reliability, and reducing request latency by <b>20-25%</b> for geographically distributed users.",
            ],
            technologies: [
                "Node.js",
                "TypeScript",
                "Express.js",
                "Python",
                "FastAPI",
                "Redis",
                "AWS DynamoDB",
                "AWS SQS",
                "AWS Cognito",
                "AWS Lambda",
                "CloudFormation",
                "CloudWatch",
                "Async Microservices",
            ],
        },
        {
            company: "Baoiam Innovations Private Limited",
            href: "https://www.linkedin.com/company/baoiam-innovations-pvt-ltd/",
            badges: [],
            location: "Noida, Uttar Pradesh",
            title: "Full Stack Intern Intern",
            logoUrl: "/assets/company/baoiam_innovations_pvt_ltd_logo.jpg",
            start: "Jun 2024",
            end: "Aug 2025",
            description: [
                // "<b>Improved multilingual AI system performance and reliability by optimizing backend processing, enhancing translation model accuracy, and implementing robust validation and safety workflows.</b>",
                "<b>Engineered and maintained the Divueens e-commerce platform, integrated <b>Razorpay</b> as a <b>payment gateway</b>, implemented a user tracking system, and efficiently handled OAuth2 authentication.</b>",
                "Reduced backend response time by <b>~30% (17s → 12s)</b> through <b>profiling-driven performance optimization</b>.",
                "Accelerated search engine visibility by 35% through SEO, database performance, and shopping cart reliability.",
                // "Implemented <b>guardrails</b> and logging-based debugging workflows to improve reliability and safety of user-facing AI systems.",
            ],
            technologies: [
                "Python",
                "NLP Model Fine-tuning",
                "Translation Systems",
                "Backend Optimization",
                "Logging & Monitoring",
                "Validation Pipelines",
            ],
        }
    ],
    education: [
        {
            school: "University Name",
            href: "https://university.edu",
            degree: "Bachelor's Degree in Computer Science",
            logoUrl: "/university.png",
            start: "2020",
            end: "2024",
        },
    ],
    projects: [
        {
            title: "DocuGenie - Document Assistant",
            href: "https://github.com/Skrasool1197/DocuGenie-Conversational-Document-Assistant",
            dates: "Jul 2024 - Aug 2024",
            active: true,
            description:
                "DocuGenie simplifies interaction with PDF documents through an interactive chat-based interface. Built with Streamlit, it provides a user-friendly platform for quick access to content, ideal for research and document analysis.",
            technologies: [
                "Python",
                "LangChain",
                "Streamlit",
                "Groq",
                "Hugging Face",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/DocuGenie-Conversational-Document-Assistant",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/carrent.png",
            video: "",
        },
        {
            title: "EasySearch LLM",
            href: "https://github.com/Skrasool1197/EasySearch-LLM",
            dates: "Aug 2024 - Sep 2024",
            active: true,
            description:
                "AI-powered search tool designed to provide quick and accurate responses by utilizing several state-of-the-art APIs, such as Wikipedia, Arxiv, DuckDuckGo, and Google Serper for image search.",
            technologies: [
                "Python",
                "Streamlit",
                "LangChain",
                "Groq",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/EasySearch-LLM",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/jobit.png",
            video: "",
        },
        {
            title: "Vext API Interaction Tool",
            href: "https://github.com/Skrasool1197/Vext-API-Interaction-Tool",
            dates: "Jun 2024",
            active: true,
            description:
                "Interactive web application built with Streamlit that allows users to query the Vext API easily. Users can input their API key and a text query to retrieve relevant information from research papers.",
            technologies: [
                "Python",
                "Vext",
                "LangChain",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/Vext-API-Interaction-Tool",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/vext.png",
            video: "",
        },
        {
            title: "ImagiText - Image to Text",
            href: "https://github.com/Skrasool1197/Text-to-Image-Using-Google-AI",
            dates: "May 2024",
            active: true,
            description:
                "Streamlit app that lets users upload an image and generates a short, descriptive text using Google's Generative AI (Gemini 1.5). The app provides an easy-to-use interface for converting images into engaging text.",
            technologies: [
                "Python",
                "Google AI",
                "LangChain",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/Text-to-Image-Using-Google-AI",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/textimage.png",
            video: "",
        },
        {
            title: "PDF Summarization",
            href: "https://github.com/Skrasool1197/Text-Summarization",
            dates: "April 2024",
            active: true,
            description:
                "AI-powered solution to automatically summarize PDF documents using the MistralAI model. Users can upload a PDF, and the application generates concise summaries based on the content.",
            technologies: [
                "Python",
                "MistralAI",
                "LangChain",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/Text-Summarization",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/summarize.png",
            video: "",
        },
        {
            title: "Customer Segmentation",
            href: "https://github.com/Skrasool1197/Customer-Segmentation-Using-Clustering",
            dates: "March 2024",
            active: true,
            description:
                "Customer segmentation model for a bank's credit card holders. Segments customers based on their transaction and credit usage patterns to tailor marketing strategies.",
            technologies: [
                "Python",
                "Data Science",
                "Clustering",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/Customer-Segmentation-Using-Clustering",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/seg.png",
            video: "",
        },
        {
            title: "Twitter Sentiment Analysis",
            href: "https://github.com/Skrasool1197/Twitter-Sentiment-Analysis",
            dates: "Jun 2024",
            active: true,
            description:
                "Machine learning model to predict the sentiment of tweets using a RandomForestClassifier. Achieved 93% accuracy on sentiment classification.",
            technologies: [
                "Python",
                "Scikit-Learn",
                "RandomForest",
            ],
            links: [
                {
                    type: "Source",
                    href: "https://github.com/Skrasool1197/Twitter-Sentiment-Analysis",
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: "/assets/tripguide.png",
            video: "",
        },
    ],
};