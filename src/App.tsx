import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  Brain,
  Code,

  User,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  Search,
  Send,
  ArrowDown,
  Zap,
  Target,
  Award,

  Globe,
  Lightbulb,
  Rocket,
  Home,
  FolderOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Shield,
  GraduationCap,
  Monitor,
  MapPin,
  Star,
} from "lucide-react";
import * as THREE from "three";
import { 
  SiJavascript, 
  SiPython, 
  SiReact, 
  SiHtml5, 
  SiNumpy, 
  SiPandas, 
  SiPytorch, 
  SiTensorflow, 
  SiCplusplus, 
  SiCss3, 
  SiBootstrap, 
  SiTableau, 
  SiOpencv, 
  SiSqlite, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiFlask, 
  SiPostgresql, 
  SiMongodb, 
  SiScikitlearn, 
  SiHuggingface, 
  SiDjango, 
  SiFastapi, 
  SiDocker, 
  SiGit, 
  SiAmazon, 
  SiGooglecloud, 
  SiCircleci 
} from "react-icons/si";
import { 
  FaRobot, 
  FaEye, 
  FaCrosshairs, 
  FaLink, 
  FaEyeDropper, 
  FaChartLine, 
  FaComments, 
  FaFire, 
  FaBolt, 
  FaCloud, 
  FaSyncAlt 
} from "react-icons/fa";
import { 
  GiSnake, 
  GiCoffeeCup, 
  GiGearHammer, 
  GiPalette, 
  GiWindHole, 
  GiGreenhouse, 
  GiFlake, 
  GiElephant, 
  GiLeak, 
  GiGuitar, 
  GiScrollUnfurled 
} from "react-icons/gi";
import { 
  BiWorld, 
  BiBrain, 
  BiBarChartAlt2, 
  BiNetworkChart 
} from "react-icons/bi";

const App = () => {

  const [visitorType, setVisitorType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSideNav, setShowSideNav] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [collaborationForm, setCollaborationForm] = useState({
    name: "",
    email: "",
    idea: "",
  });
  const [scheduleForm, setScheduleForm] = useState({
    name: "",
    email: "",
    education: "",
    background: "",
    currentSkills: "",
    skillLevel: "",
    targetSkills: "",
    duration: "",
    dailyTime: "",
  });
  const [stats, setStats] = useState({
    linesOfCode: 0,
    projects: 0,
    technologies: 0,
  });
  const threeRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState(null);

  // Device detection for emoji compatibility
  const [isIOS, setIsIOS] = useState(false);

  // Device detection for emoji compatibility
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
    const isMacOS = /Mac OS X|macOS/.test(userAgent);
    setIsIOS(isIOSDevice || isMacOS);
  }, []);

  // Scroll listener for side navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      setShowSideNav(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated stats
  useEffect(() => {
    const animateStats = () => {
      const targetStats = {
        linesOfCode: 125000,
        projects: 15,
        technologies: 25,
      };
      let current = { linesOfCode: 0, projects: 0, technologies: 0 };

      const interval = setInterval(() => {
        current.linesOfCode += Math.ceil(targetStats.linesOfCode / 100);
        current.projects += Math.ceil(targetStats.projects / 100);
        current.technologies += Math.ceil(targetStats.technologies / 100);

        if (current.linesOfCode >= targetStats.linesOfCode) {
          current = targetStats;
          clearInterval(interval);
        }

        setStats({ ...current });
      }, 50);
    };

    if (showSideNav) {
      animateStats();
    }
  }, [showSideNav]);

  // Three.js Neural Network Visualization
  useEffect(() => {
    if (!threeRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(300, 200);
    renderer.setClearColor(0x000000, 0);
    threeRef.current.innerHTML = "";
    threeRef.current.appendChild(renderer.domElement);

    const nodes = [];
    const connections = [];

    for (let layer = 0; layer < 3; layer++) {
      const layerNodes = [];
      const nodeCount = layer === 1 ? 4 : 3;

      for (let i = 0; i < nodeCount; i++) {
        const geometry = new THREE.SphereGeometry(0.08, 12, 12);
        const material = new THREE.MeshBasicMaterial({
          color: layer === 0 ? 0x00ffff : layer === 1 ? 0xff0080 : 0x80ff00,
          transparent: true,
          opacity: 0.8,
        });
        const node = new THREE.Mesh(geometry, material);

        node.position.x = (layer - 1) * 1.5;
        node.position.y = (i - nodeCount / 2 + 0.5) * 0.4;
        node.position.z = 0;

        scene.add(node);
        layerNodes.push(node);
      }
      nodes.push(layerNodes);
    }

    for (let layer = 0; layer < 2; layer++) {
      for (let i = 0; i < nodes[layer].length; i++) {
        for (let j = 0; j < nodes[layer + 1].length; j++) {
          const geometry = new THREE.BufferGeometry();
          const positions = new Float32Array([
            nodes[layer][i].position.x,
            nodes[layer][i].position.y,
            nodes[layer][i].position.z,
            nodes[layer + 1][j].position.x,
            nodes[layer + 1][j].position.y,
            nodes[layer + 1][j].position.z,
          ]);
          geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
          );

          const material = new THREE.LineBasicMaterial({
            color: 0x333333,
            transparent: true,
            opacity: 0.3,
          });
          const line = new THREE.Line(geometry, material);
          scene.add(line);
          connections.push(line);
        }
      }
    }

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);

      nodes.forEach((layer) => {
        layer.forEach((node) => {
          node.rotation.x += 0.01;
          node.rotation.y += 0.01;
        });
      });

      const time = Date.now() * 0.001;
      connections.forEach((line, index) => {
        line.material.opacity = 0.2 + Math.sin(time + index * 0.1) * 0.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (threeRef.current && renderer.domElement) {
        threeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Utility functions for skills
  const getConnectedSkills = (skillId) => {
    const skill = skillsData.find((s) => s.id === skillId);
    if (!skill) return [];
    return skillsData.filter(
      (s) => s.cluster === skill.cluster && s.id !== skillId
    );
  };

  const isConnectedToHovered = (skillId) => {
    if (!hoveredSkill) return false;
    const connectedSkills = getConnectedSkills(hoveredSkill);
    return connectedSkills.some((s) => s.id === skillId);
  };

  const handleSkillHover = (skillId) => {
    setHoveredSkill(skillId);
  };

  const handleSkillLeave = () => {
    setHoveredSkill(null);
  };

  // Helper function to get the black interior with subtle glow
  const getBlackInterior = () => {
    return "url(#blackWithGlow)";
  };

  // Helper function to get hexagon coordinates
  const getHexagonPoints = (row, col) => {
    const hexWidth = 100;
    const hexHeight = 75;
    const isOddRow = row % 2 === 1;
    const x = 80 + col * hexWidth + (isOddRow ? hexWidth / 2 : 0);
    const y = 50 + row * hexHeight;

    return `${x},${y} ${x + 50},${y - 25} ${x + 100},${y} ${x + 100},${
      y + 50
    } ${x + 50},${y + 75} ${x},${y + 50}`;
  };

  const SkillIcon = ({ skill, isHovered, centerX, centerY }) => {
    // Map icon names to React Icon components
    const iconMap = {
      JS_LOGO: SiJavascript,
      PYTHON: SiPython,
      REACT: SiReact,
      HTML: SiHtml5,
      NUMPY: SiNumpy,
      PANDAS: SiPandas,
      PYTORCH: SiPytorch,
      TENSORFLOW: SiTensorflow,
      JAVA: GiCoffeeCup, // Using coffee cup for Java
      CPP: SiCplusplus,
      CSS: SiCss3,
      BOOTSTRAP: SiBootstrap,
      MATPLOTLIB: BiBarChartAlt2, // Using chart icon for matplotlib
      TABLEAU: SiTableau,
      OPENCV: SiOpencv,
      SQL: SiSqlite,
      TAILWIND: SiTailwindcss,
      NODEJS: SiNodedotjs,
      FLASK: SiFlask,
      POSTGRESQL: SiPostgresql,
      MONGODB: SiMongodb,
      SCIKIT: SiScikitlearn,
      HUGGINGFACE: SiHuggingface,
      DJANGO: SiDjango,
      FASTAPI: SiFastapi,
      DOCKER: SiDocker,
      GIT: SiGit,
      AWS: SiAmazon,
      GCP: SiGooglecloud,
      CIRCLECI: SiCircleci,
      ROBOT: FaRobot,
      EYE: FaEye,
      CROSSHAIRS: FaCrosshairs,
      LINK: FaLink,
      EYEDROPPER: FaEyeDropper,
      CHARTLINE: FaChartLine,
      COMMENTS: FaComments,
      FIRE: FaFire,
      BOLT: FaBolt,
      CLOUD: FaCloud,
      SYNC: FaSyncAlt,
      SNAKE: GiSnake,
      COFFEE: GiCoffeeCup,
      GEAR: GiGearHammer,
      PALETTE: GiPalette,
      WIND: GiWindHole, // Using wind hole for wind
      GREENHOUSE: GiGreenhouse,
      FLASK_ICON: GiFlake, // Using flake for flask
      ELEPHANT: GiElephant,
      LEAF: GiLeak, // Using leak for leaf
      GUITAR: GiGuitar,
      WHALE: GiScrollUnfurled, // Using scroll for whale
      SCROLL: GiScrollUnfurled,
      WORLD: BiWorld,
      BRAIN: BiBrain,
      TARGET: FaCrosshairs, // Using crosshairs for target
      BARCHART: BiBarChartAlt2,
      NETWORK: BiNetworkChart,
    };

    const IconComponent = iconMap[skill.icon];
    
    if (IconComponent) {
      // For React Icons, use the foreignObject approach with white background
      return (
        <foreignObject x={centerX - 12} y={centerY - 12} width="24" height="24">
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "4px",
              padding: "2px",
              boxShadow: isHovered 
                ? `0 0 8px ${skill.color}, 0 0 4px rgba(255,255,255,0.8)` 
                : "0 1px 3px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <IconComponent
              style={{
                fontSize: isHovered ? "20px" : "16px",
                color: skill.color,
                filter: isHovered
                  ? `drop-shadow(0 0 6px ${skill.color})`
                  : "none",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        </foreignObject>
      );
    } else {
      // Fallback for any remaining emojis
      return (
        <text
          x={centerX}
          y={centerY + 5}
          textAnchor="middle"
          fontSize={isHovered ? "24" : "20"}
          fill={skill.color}
          style={{
            filter: isHovered
              ? `drop-shadow(0 0 10px ${skill.color})`
              : `drop-shadow(0 2px 4px rgba(0,0,0,0.5))`,
            transition: "all 0.3s ease",
          }}
        >
          {skill.icon}
        </text>
      );
    }
  };

  // Skills data with clustering - 4 rows only, more horizontal spread
  const skillsData = [
    // Row 0 - 9 skills
    {
      id: "python",
      name: "Python",
      category: "Languages",
      level: 95,
      color: "#3776AB",
      cluster: "languages",
      icon: "PYTHON",
      position: { row: 0, col: 0 },
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Languages",
      level: 90,
      color: "#F7DF1E",
      cluster: "languages",
      icon: "JS_LOGO",
      position: { row: 0, col: 1 },
    },
    {
      id: "react",
      name: "React.js",
      category: "Frontend",
      level: 90,
      color: "#61DAFB",
      cluster: "frontend",
      icon: "REACT",
      position: { row: 0, col: 2 },
    },
    {
      id: "html",
      name: "HTML5",
      category: "Frontend",
      level: 95,
      color: "#E34F26",
      cluster: "frontend",
      icon: "HTML",
      position: { row: 0, col: 3 },
    },
    {
      id: "numpy",
      name: "NumPy",
      category: "Data Science",
      level: 95,
      color: "#013243",
      cluster: "data",
      icon: "NUMPY",
      position: { row: 0, col: 4 },
    },
    {
      id: "pandas",
      name: "Pandas",
      category: "Data Science",
      level: 95,
      color: "#150458",
      cluster: "data",
      icon: "PANDAS",
      position: { row: 0, col: 5 },
    },
    {
      id: "pytorch",
      name: "PyTorch",
      category: "AI/ML",
      level: 95,
      color: "#EE4C2C",
      cluster: "ai",
      icon: "PYTORCH",
      position: { row: 0, col: 6 },
    },
    {
      id: "tensorflow",
      name: "TensorFlow",
      category: "AI/ML",
      level: 90,
      color: "#FF6F00",
      cluster: "ai",
      icon: "TENSORFLOW",
      position: { row: 0, col: 7 },
    },
    {
      id: "llm",
      name: "LLM",
      category: "AI/ML",
      level: 85,
      color: "#9333EA",
      cluster: "ai",
      icon: "ROBOT",
      position: { row: 0, col: 8 },
    },

    // Row 1 (offset) - 10 skills
    {
      id: "java",
      name: "Java",
      category: "Languages",
      level: 85,
      color: "#ED8B00",
      cluster: "languages",
      icon: "JAVA",
      position: { row: 1, col: 0 },
    },
    {
      id: "cpp",
      name: "C/C++",
      category: "Languages",
      level: 80,
      color: "#00599C",
      cluster: "languages",
      icon: "CPP",
      position: { row: 1, col: 1 },
    },
    {
      id: "css",
      name: "CSS3",
      category: "Frontend",
      level: 90,
      color: "#1572B6",
      cluster: "frontend",
      icon: "CSS",
      position: { row: 1, col: 2 },
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      category: "Frontend",
      level: 80,
      color: "#7952B3",
      cluster: "frontend",
      icon: "BOOTSTRAP",
      position: { row: 1, col: 3 },
    },
    {
      id: "matplotlib",
      name: "Matplotlib",
      category: "Data Science",
      level: 85,
      color: "#11557C",
      cluster: "data",
      icon: "MATPLOTLIB",
      position: { row: 1, col: 4 },
    },
    {
      id: "tableau",
      name: "Tableau",
      category: "Data Science",
      level: 80,
      color: "#E97627",
      cluster: "data",
      icon: "TABLEAU",
      position: { row: 1, col: 5 },
    },
    {
      id: "opencv",
      name: "OpenCV",
      category: "AI/ML",
      level: 90,
      color: "#5C3EE8",
      cluster: "ai",
      icon: "OPENCV",
      position: { row: 1, col: 6 },
    },
    {
      id: "yolo",
      name: "YOLO",
      category: "AI/ML",
      level: 85,
      color: "#00FFFF",
      cluster: "ai",
      icon: "CROSSHAIRS",
      position: { row: 1, col: 7 },
    },
    {
      id: "rag",
      name: "RAG",
      category: "AI/ML",
      level: 80,
      color: "#7C3AED",
      cluster: "ai",
      icon: "LINK",
      position: { row: 1, col: 8 },
    },
    {
      id: "googlevision",
      name: "Google Vision",
      category: "AI/ML",
      level: 75,
      color: "#4285F4",
      cluster: "ai",
      icon: "EYE",
      position: { row: 2, col: 9 },
    },

    // Row 2 - 9 skills
    {
      id: "sql",
      name: "SQL",
      category: "Languages",
      level: 85,
      color: "#336791",
      cluster: "languages",
      icon: "SQL",
      position: { row: 2, col: 0 },
    },
    {
      id: "tailwind",
      name: "Tailwind",
      category: "Frontend",
      level: 85,
      color: "#06B6D4",
      cluster: "frontend",
      icon: "TAILWIND",
      position: { row: 2, col: 1 },
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "Backend",
      level: 85,
      color: "#339933",
      cluster: "backend",
      icon: "NODEJS",
      position: { row: 2, col: 2 },
    },
    {
      id: "flask",
      name: "Flask",
      category: "Backend",
      level: 90,
      color: "#000000",
      cluster: "backend",
      icon: "FLASK",
      position: { row: 2, col: 3 },
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      category: "Database",
      level: 80,
      color: "#336791",
      cluster: "database",
      icon: "POSTGRESQL",
      position: { row: 2, col: 4 },
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Database",
      level: 75,
      color: "#47A248",
      cluster: "database",
      icon: "MONGODB",
      position: { row: 2, col: 5 },
    },
    {
      id: "sklearn",
      name: "Scikit-learn",
      category: "AI/ML",
      level: 90,
      color: "#F7931E",
      cluster: "ai",
      icon: "SCIKIT",
      position: { row: 2, col: 6 },
    },
    {
      id: "huggingface",
      name: "HuggingFace",
      category: "AI/ML",
      level: 85,
      color: "#FFD21E",
      cluster: "ai",
      icon: "HUGGINGFACE",
      position: { row: 2, col: 7 },
    },
    {
      id: "nlp",
      name: "NLP",
      category: "AI/ML",
      level: 85,
      color: "#EC4899",
      cluster: "ai",
      icon: "COMMENTS",
      position: { row: 2, col: 8 },
    },

    // Row 3 (offset) - 7 skills
    {
      id: "django",
      name: "Django",
      category: "Backend",
      level: 85,
      color: "#092E20",
      cluster: "backend",
      icon: "DJANGO",
      position: { row: 3, col: 1 },
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "Backend",
      level: 80,
      color: "#009688",
      cluster: "backend",
      icon: "FASTAPI",
      position: { row: 3, col: 2 },
    },
    {
      id: "docker",
      name: "Docker",
      category: "DevOps",
      level: 80,
      color: "#2496ED",
      cluster: "devops",
      icon: "DOCKER",
      position: { row: 3, col: 3 },
    },
    {
      id: "git",
      name: "Git",
      category: "DevOps",
      level: 90,
      color: "#F05032",
      cluster: "devops",
      icon: "GIT",
      position: { row: 3, col: 4 },
    },
    {
      id: "aws",
      name: "AWS",
      category: "Cloud",
      level: 75,
      color: "#FF9900",
      cluster: "devops",
      icon: "AWS",
      position: { row: 3, col: 5 },
    },
    {
      id: "gcp",
      name: "Google Cloud",
      category: "Cloud",
      level: 70,
      color: "#4285F4",
      cluster: "devops",
      icon: "GCP",
      position: { row: 3, col: 6 },
    },
    {
      id: "circleci",
      name: "CircleCI",
      category: "DevOps",
      level: 70,
      color: "#343434",
      cluster: "devops",
      icon: "CIRCLECI",
      position: { row: 3, col: 7 },
    },
  ];

  const projects = [
    {
      id: 1,
      title: "LLM-Powered QA Tool for Research Assistance",
      description:
        "Developed a retrieval-augmented question-answering system using LangChain and Hugging Face's LLMs, enabling document-based querying over structured and unstructured research data using FAISS-based vector search.",
      tech: ["LangChain", "Hugging Face", "FAISS", "Python"],
      impact: "Enhanced research efficiency by 300%",
      github: "https://github.com/graceevangelene/llm-qa-tool",
      year: 2025,
      category: "AI/ML",
    },
    {
      id: 2,
      title: "Dyslexic Handwriting Recognition",
      description:
        "Developed a CNN-based model with advanced data augmentation, dropout tuning, and learning rate scheduling using PyTorch and Scikit-learn. Conducted EDA and model evaluation with Matplotlib, Seaborn, and cross-validation; deployed using Flask, integrated with Hugging Face Transformers.",
      tech: ["PyTorch", "OpenCV", "Scikit-learn", "PIL", "Matplotlib"],
      impact: "94% accuracy in handwriting recognition",
      github: "https://github.com/graceevangelene/dyslexic-handwriting",
      year: 2025,
      category: "AI/ML",
    },
    {
      id: 3,
      title: "AI-Powered Trade Scanner for Financial Markets",
      description:
        "Designed a sentiment-aware recommender using VADER, TextBlob, and NLTK; visualized market trends with Matplotlib and automated signal generation with RESTful APIs.",
      tech: [
        "Python",
        "NLP",
        "NLTK",
        "VADER",
        "TextBlob",
        "yfinance",
        "Tweepy",
      ],
      impact: "15% improvement in trading signals",
      github: "https://github.com/graceevangelene/trade-scanner",
      year: 2025,
      category: "Finance",
    },
    {
      id: 4,
      title: "Minneapolis City Directory Parsing",
      description:
        "Built a pipeline to OCR and parse scanned city directories, extracting structured resident, deceased, and moved entries with address, occupation, and relationship metadata using Vision API, Tesseract, and custom regex logic.",
      tech: [
        "Python",
        "Google Vision API",
        "OpenCV",
        "Tesseract",
        "PIL",
        "RegEx",
      ],
      impact: "Automated historical data extraction from 1000+ scanned pages",
      github: "https://github.com/graceevangelene/city-directory-parser",
      year: 2025,
      category: "Data Processing",
    },
    {
      id: 5,
      title: "Maternal and Infant Health Data Product",
      description:
        "Developed a data-driven web tool to analyze maternal health factors influencing infant mortality using XGBoost, GMM, and decision trees; delivered predictive insights and visual dashboards to support targeted healthcare interventions.",
      tech: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "Tableau",
        "Streamlit",
      ],
      impact: "Enabled data-driven healthcare intervention strategies",
      github: "https://github.com/graceevangelene/maternal-health-analytics",
      year: 2024,
      category: "Healthcare Analytics",
    },
    {
      id: 6,
      title: "Smart Contract-based Access Control for Healthcare Data",
      description:
        "Developed a blockchain-based access control system for healthcare data using Solidity smart contracts, with deployment via Truffle and Ethereum; integrated a Django frontend for secure user interaction and data access.",
      tech: ["Solidity", "Python", "Truffle", "Ethereum", "Django"],
      impact: "Enhanced healthcare data security and access control",
      github: "https://github.com/graceevangelene/blockchain-healthcare",
      year: 2023,
      category: "Blockchain",
    },
    {
      id: 7,
      title: "Intelligent Alert System",
      description:
        "Developed a CNN-based predator detection system integrated with real-time alert mechanisms, enabling automated threat recognition and prompt authority notifications.",
      tech: ["Python", "OpenCV", "TensorFlow", "CNN"],
      impact: "Real-time threat detection with automated alert system",
      github: "https://github.com/graceevangelene/intelligent-alert-system",
      year: 2022,
      category: "Computer Vision",
    },
  ];

  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Elysium Security (Early-Stage Startup)",
      period: "Feb 2025 – Present",
      location: "Buffalo, NY",
      type: "internship",
      skills: ["YOLO", "Computer Vision", "Flask", "Docker", "Python"],
      achievements: [
        "Built YOLO-based object detection models enabling real-time crime detection",
        "Designed 3D CNN (R(2+1)D) models for shoplifting gesture recognition",
        "Integrated ML models into Flask APIs, containerized with Docker",
      ],
    },
    {
      title: "Full Stack Web Developer",
      company: "Spartangator Digital Pvt. Ltd.",
      period: "Aug 2023 – Jul 2024",
      location: "Hyderabad, India",
      type: "full-time",
      skills: ["React", "Node.js", "Django", "Flask", "AWS", "GCP"],
      achievements: [
        "Developed full-stack applications using MERN, Django, and Flask",
        "Designed accessible UIs with Tailwind CSS ensuring WCAG 2.1 compliance",
        "Cloud-based hosting on AWS/GCP with RESTful APIs",
      ],
    },
  ];

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      color: "from-cyan-400 to-blue-500",
    },
    {
      id: "pitch",
      label: "Pitch",
      icon: Lightbulb,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code,
      color: "from-green-400 to-teal-500",
    },
    {
      id: "projects",
      label: "Projects",
      icon: FolderOpen,
      color: "from-orange-400 to-red-500",
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "contact",
      label: "Contact",
      icon: Mail,
      color: "from-pink-400 to-rose-500",
    },
  ];

  const handleVisitorTypeSelect = (type) => {
    setVisitorType(type);
    // Use a longer timeout to ensure the section is rendered
    setTimeout(() => {
      if (type === "general") {
        scrollToSection("pitch");
      } else {
        scrollToSection(type);
      }
    }, 100);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const results = [];

    projects.forEach((project) => {
      if (
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some((tech) => tech.toLowerCase().includes(query))
      ) {
        results.push({ type: "project", data: project });
      }
    });

    experiences.forEach((exp) => {
      if (
        exp.title.toLowerCase().includes(query) ||
        exp.company.toLowerCase().includes(query) ||
        exp.skills.some((skill) => skill.toLowerCase().includes(query))
      ) {
        results.push({ type: "experience", data: exp });
      }
    });

    skillsData.forEach((skill) => {
      if (skill.name.toLowerCase().includes(query)) {
        results.push({ type: "skill", data: skill });
      }
    });

    setSearchResults(results);
  };

  const handleCollaborationSubmit = async (e) => {
    e.preventDefault();
    if (collaborationForm.email && collaborationForm.idea) {
      try {
        // EmailJS configuration - you'll need to set up these IDs
        const serviceId = 'service_ao2qj8c'; // Replace with your EmailJS service ID
        const templateId = 'template_tjpfd1d'; // Replace with your template ID
        const publicKey = 'YuchHCEA6iAbWQY0O'; // Replace with your public key

        const templateParams = {
          to_email: "evangelene.grace@gmail.com",
          from_name: collaborationForm.name || "Anonymous",
          from_email: collaborationForm.email,
          project_idea: collaborationForm.idea,
          submitted_date: new Date().toLocaleString(),
        };

        // Send email directly
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        alert(
          "Thank you for your collaboration proposal! I'll get back to you soon."
        );
        setCollaborationForm({ name: "", email: "", idea: "" });
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Thank you for your proposal! I'll review it and get back to you.");
        setCollaborationForm({ name: "", email: "", idea: "" });
      }
    }
  };

  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (scheduleForm.email && scheduleForm.targetSkills) {
      try {
        // EmailJS configuration - you'll need to set up these IDs
        const serviceId = 'service_ao2qj8c'; // Replace with your EmailJS service ID
        const templateId = 'template_g9xmchw'; // Replace with your template ID
        const publicKey = 'YuchHCEA6iAbWQY0O'; // Replace with your public key

        const templateParams = {
          to_email: "evangelene.grace@gmail.com",
          from_name: scheduleForm.name || "Anonymous",
          from_email: scheduleForm.email,
          education_background: scheduleForm.education || "Not specified",
          professional_background: scheduleForm.background || "Not specified",
          current_skills: scheduleForm.currentSkills || "None",
          skill_level: scheduleForm.skillLevel || "Not specified",
          target_skills: scheduleForm.targetSkills,
          duration: scheduleForm.duration || "Not specified",
          daily_time: scheduleForm.dailyTime || "Not specified",
          submitted_date: new Date().toLocaleString(),
        };

        // Send email directly
        await emailjs.send(serviceId, templateId, templateParams, publicKey);

        alert(
          "Thank you! I'll create a custom learning schedule and send it to your email."
        );
        setScheduleForm({
          name: "",
          email: "",
          education: "",
          background: "",
          currentSkills: "",
          skillLevel: "",
          targetSkills: "",
          duration: "",
          dailyTime: "",
        });
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Thank you! I'll review your request and create a custom schedule.");
        setScheduleForm({
          name: "",
          email: "",
          education: "",
          background: "",
          currentSkills: "",
          skillLevel: "",
          targetSkills: "",
          duration: "",
          dailyTime: "",
        });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });
    } else {
      // If element not found, try again after a short delay
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          retryElement.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
          });
        }
      }, 200);
    }
  };

  const handleResultClick = (result) => {
    if (result.type === "project") {
      scrollToSection("projects");
      // Find the project index and scroll carousel to it
      const projectIndex = projects.findIndex(project => project.title === result.data.title);
      if (projectIndex !== -1) {
        // Calculate the carousel position to show this project
        // Since we show 3 projects at a time, we need to position the carousel accordingly
        const targetIndex = Math.max(0, Math.min(projectIndex, projects.length - 3));
        setTimeout(() => {
          setCurrentProjectIndex(targetIndex);
        }, 500); // Wait for scroll animation to complete
      }
    } else if (result.type === "experience") {
      scrollToSection("experience");
    } else if (result.type === "skill") {
      scrollToSection("skills");
    }
  };

  const scrollToNext = () => {
    scrollToSection("pitch");
  };

  // Simplified carousel navigation functions
  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 3 : prevIndex - 1
    );
  };

  // Hide mobile nav on very small screens (<800px)
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const updateIsNarrow = () => setIsNarrow(window.innerWidth < 800);
    updateIsNarrow();
    window.addEventListener("resize", updateIsNarrow);
    return () => window.removeEventListener("resize", updateIsNarrow);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: ${projects.length * 35}%;
        }

        .carousel-slide {
          flex: 0 0 ${100 / projects.length}%;
          padding: 0 1rem;
        }

        @media (max-width: 1024px) {
          .carousel-track {
            width: ${projects.length * 100}%;
          }

          .carousel-slide {
            flex: 0 0 ${100 / projects.length}%;
          }
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.6);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.8);
        }
      `}</style>

      {/* Animated Side Navigation - Hidden on mobile */}
      {showSideNav && (
        <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="relative">
            <div className="space-y-6">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.id} className="relative group">
                    {/* Connecting line segment ABOVE icon (except for first item) */}
                    {index > 0 && (
                      <div
                        className="absolute left-1/2 bottom-full w-0.5 h-4 transform -translate-x-1/2 bg-gradient-to-t from-cyan-500 to-purple-500"
                        style={{
                          marginBottom: "2px",
                        }}
                      ></div>
                    )}

                    {/* Icon Button */}
                    {/* Icon Button */}
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="relative z-10 p-2 hover:scale-110 transition-all duration-300 group"
                    >
                      <IconComponent className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 transition-all duration-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(6,182,212,0.8))_drop-shadow(0_0_6px_rgba(6,182,212,0.6))]" />
                    </button>

                    {/* Connecting line segment BELOW icon (except for last item) */}
                    {index < navigationItems.length - 1 && (
                      <div
                        className="absolute left-1/2 top-full w-0.5 h-4 transform -translate-x-1/2 bg-gradient-to-b from-cyan-500 to-purple-500"
                        style={{
                          marginTop: "2px",
                        }}
                      ></div>
                    )}

                    {/* Tooltip */}
                    <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {item.label}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Line - Hidden entirely on very small screens (<800px) */}
      {!isNarrow && (
        <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="flex space-x-4 bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-600">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <IconComponent className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Homepage */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="min-h-screen flex items-center justify-center p-4 relative">
          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="mb-4">
              <h1 className="text-6xl font-bold mb-3 py-3 leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Hey there! {isIOS ? "👋" : ""}
              </h1>
              <h2 className="text-4xl font-semibold mb-6">
                I'm Grace Evangelene
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                AI/ML Engineer & Full-Stack Developer passionate about building
                intelligent systems that solve real-world problems. Currently
                pursuing MS in Computer Science at University at Buffalo.
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-400 mb-6">
                What brings you here today?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
                <button
                  onClick={() => handleVisitorTypeSelect("recruiter")}
                  className="p-4 sm:p-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 group shadow-xl"
                >
                  <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 group-hover:animate-bounce" />
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">
                    I'm a Recruiter
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Search for relevant skills & experience
                  </p>
                </button>

                <button
                  onClick={() => handleVisitorTypeSelect("developer")}
                  className="p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 group shadow-xl"
                >
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 group-hover:animate-bounce" />
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">
                    I'm a Fellow Developer
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-100">
                    Let's collaborate on something amazing
                  </p>
                </button>

                <button
                  onClick={() => handleVisitorTypeSelect("aspiring")}
                  className="p-4 sm:p-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 group shadow-xl"
                >
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 group-hover:animate-bounce" />
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">
                    I'm an Aspiring Developer
                  </h3>
                  <p className="text-xs sm:text-sm text-green-100">
                    Get a custom learning schedule
                  </p>
                </button>

                <button
                  onClick={() => handleVisitorTypeSelect("general")}
                  className="p-4 sm:p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 group shadow-xl"
                >
                  <User className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 group-hover:animate-bounce" />
                  <h3 className="text-sm sm:text-lg font-semibold mb-2">Just Exploring</h3>
                  <p className="text-xs sm:text-sm text-orange-100">
                    Browse through everything
                  </p>
                </button>
              </div>
            </div>

            {/* Scroll Button */}
            <div className="text-center mb-8">
              <button
                onClick={scrollToNext}
                className="group bg-gradient-to-b from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-purple-400 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <span>Discover My Journey</span>
                <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <div className="flex justify-center space-x-8 text-gray-400">
                <a
                  href="mailto:evangelene.grace@gmail.com"
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">evangelene.grace@gmail.com</span>
                </a>

                <a
                  href="https://linkedin.com/in/grace-evangelene"
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">grace-evangelene</span>
                </a>

                <a
                  href="https://github.com/graceevangelene"
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">graceevangelene</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Search Interface */}
      {visitorType === "recruiter" && (
        <section id="recruiter" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Recruiter Dashboard
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="mb-8">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for skills, technologies, or experience (e.g., Python, AI, React)"
                  className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>
            </div>

            {searchResults.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  Search Results ({searchResults.length})
                </h3>
                <div className="max-h-96 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {searchResults.map((result, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="bg-gray-700 rounded-lg p-6 border border-gray-600 hover:border-cyan-500/50 transition-colors cursor-pointer hover:bg-gray-650 transform hover:scale-[1.02]"
                    >
                    {result.type === "project" && (
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-cyan-400">
                            {result.data.title}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-400">
                              {result.data.year}
                            </span>
                            <span className="text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                              Click to view
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-3">
                          {result.data.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {result.data.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p className="text-green-400 text-sm">
                          <strong>Impact:</strong> {result.data.impact}
                        </p>
                      </div>
                    )}

                    {result.type === "experience" && (
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-purple-400">
                            {result.data.title}
                          </h4>
                          <span className="text-xs text-purple-400 bg-purple-900/30 px-2 py-1 rounded">
                            Click to view
                          </span>
                        </div>
                        <p className="text-gray-300 mb-2">
                          {result.data.company} • {result.data.period}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {result.data.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          {result.data.achievements.map((achievement, i) => (
                            <li key={i}>• {achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {result.type === "skill" && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-xl font-semibold text-green-400">
                            {result.data.name}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-cyan-400 font-semibold">
                              {result.data.level}%
                            </span>
                            <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">
                              Click to view
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-400">{result.data.category}</p>
                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                          <div
                            className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${result.data.level}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                </div>
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">
                  No results found. Try searching for:
                </p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {[
                    "Python",
                    "AI",
                    "React",
                    "Machine Learning",
                    "Full Stack",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        handleSearch();
                      }}
                      className="px-3 py-1 bg-gray-700 hover:bg-cyan-600 text-gray-300 hover:text-white rounded-full text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Developer Collaboration Form */}
      {visitorType === "developer" && (
        <section id="developer" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Collaborate!
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-8 text-center">
              I'm always excited to work on innovative projects. Tell me about
              your idea!
            </p>
            <form onSubmit={handleCollaborationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name (Optional)
                </label>
                <input
                  type="text"
                  value={collaborationForm.name}
                  onChange={(e) =>
                    setCollaborationForm({
                      ...collaborationForm,
                      name: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={collaborationForm.email}
                  onChange={(e) =>
                    setCollaborationForm({
                      ...collaborationForm,
                      email: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Idea *
                </label>
                <textarea
                  required
                  rows={6}
                  value={collaborationForm.idea}
                  onChange={(e) =>
                    setCollaborationForm({
                      ...collaborationForm,
                      idea: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="Describe your project idea, the technologies involved, and how we could collaborate..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Collaboration Proposal</span>
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Aspiring Developer Form */}
      {visitorType === "aspiring" && (
        <section id="aspiring" className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Custom Learning Schedule
          </h2>
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-8 text-center">
              Let me create a personalized learning roadmap tailored to your
              goals and schedule.
            </p>
            <form onSubmit={handleScheduleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={scheduleForm.name}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={scheduleForm.email}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        email: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Education Background
                </label>
                <select
                  value={scheduleForm.education}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      education: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select your background</option>
                  <option value="high-school">High School</option>
                  <option value="college-student">College Student</option>
                  <option value="college-graduate">College Graduate</option>
                  <option value="masters">Master's Degree</option>
                  <option value="self-taught">Self-Taught</option>
                  <option value="bootcamp">Bootcamp Graduate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Professional Background
                </label>
                <input
                  type="text"
                  value={scheduleForm.background}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      background: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="e.g., Marketing, Finance, Healthcare, Student, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Skills & Technologies
                </label>
                <textarea
                  rows={3}
                  value={scheduleForm.currentSkills}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      currentSkills: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="List any programming languages, tools, or technologies you already know (or write 'None' if you're starting from scratch)"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Skill Level
                </label>
                <select
                  value={scheduleForm.skillLevel}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      skillLevel: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                >
                  <option value="">Select your level</option>
                  <option value="complete-beginner">Complete Beginner</option>
                  <option value="some-knowledge">
                    Some Programming Knowledge
                  </option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">
                    Advanced (Looking to Specialize)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skills You Want to Master *
                </label>
                <textarea
                  required
                  rows={3}
                  value={scheduleForm.targetSkills}
                  onChange={(e) =>
                    setScheduleForm({
                      ...scheduleForm,
                      targetSkills: e.target.value,
                    })
                  }
                  className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  placeholder="e.g., Python, React, Machine Learning, Data Science, Full-Stack Development, etc."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Target Duration
                  </label>
                  <select
                    value={scheduleForm.duration}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        duration: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">Select duration</option>
                    <option value="3-months">3 Months</option>
                    <option value="6-months">6 Months</option>
                    <option value="12-months">12 Months</option>
                    <option value="18-months">18 Months</option>
                    <option value="flexible">Flexible Timeline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Daily Time Commitment
                  </label>
                  <select
                    value={scheduleForm.dailyTime}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        dailyTime: e.target.value,
                      })
                    }
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">Select time commitment</option>
                    <option value="30-minutes">30 minutes/day</option>
                    <option value="1-hour">1 hour/day</option>
                    <option value="2-hours">2 hours/day</option>
                    <option value="3-hours">3+ hours/day</option>
                    <option value="weekends-only">Weekends only</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-3 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Get My Custom Learning Schedule</span>
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Pitch Section */}
      <section
        id="pitch"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 mt-8">
            <h1 className="text-6xl font-bold mb-5 py-3 leading-tight bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Building Tomorrow's Solutions Today
            </h1>
            <p className="text-2xl text-gray-300 mb-2 max-w-4xl mx-auto leading-relaxed">
              I transform complex problems into intelligent, scalable solutions
              using cutting-edge AI/ML and full-stack technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 p-3 rounded-xl border border-cyan-500/30 backdrop-blur-sm">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                AI Innovation
              </h3>
              <p className="text-gray-300">
                Crime detection systems to handwriting recognition, creating AI
                that makes a real-world impact
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-3 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                Full-Stack Mastery
              </h3>
              <p className="text-gray-300">
                End-to-end development expertise with modern frameworks, cloud
                deployment, and scalable architectures
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 p-3 rounded-xl border border-green-500/30 backdrop-blur-sm">
              <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                Problem Solver
              </h3>
              <p className="text-gray-300">
                I don't just code—I understand business needs and deliver
                solutions that drive measurable results
              </p>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Why Choose Me?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-1">
                    Proven Impact
                  </h4>
                  <p className="text-gray-300">
                    94% accuracy in accessibility-focused AI, 300% efficiency
                    improvements, 15% better trading signals
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Lightbulb className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1">
                    Innovation First
                  </h4>
                  <p className="text-gray-300">
                    Always exploring cutting-edge technologies like LangChain,
                    YOLO, and advanced neural architectures
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-purple-400 mb-1">
                    Full-Stack Versatility
                  </h4>
                  <p className="text-gray-300">
                    From React frontends to Docker deployments, I handle the
                    entire development lifecycle
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Brain className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-400 mb-1">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-300">
                    MS student at UB, always staying ahead of industry trends
                    and emerging technologies
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Skills Showcase - NEW Honeycomb Technical Arsenal */}
      <section id="skills" className="py-8 px-10 max-w-7xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-gray-700">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2
                className="text-4xl font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-white to-cyan-200 bg-clip-text text-transparent"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.2))",
                }}
              >
                Technical Arsenal
              </h2>
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"></div>
            </div>
          </div>

          <div className="flex items-center justify-start pl-8 lg:pl-16">
            <div className="relative transform scale-125">
              <svg
                width="1200"
                height="460"
                viewBox="0 0 1200 460"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient
                    id="neonGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                    <stop offset="25%" stopColor="#A855F7" stopOpacity="1" />
                    <stop offset="50%" stopColor="#6366F1" stopOpacity="1" />
                    <stop offset="75%" stopColor="#3B82F6" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00FFFF" stopOpacity="1" />
                  </linearGradient>

                  <radialGradient id="blackWithGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1F2937" stopOpacity="0.3" />
                    <stop offset="70%" stopColor="#1F2937" stopOpacity="0.3" />
                    <stop offset="85%" stopColor="#374151" stopOpacity="0.2" />
                    <stop offset="95%" stopColor="#4B5563" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#6B7280" stopOpacity="0.1" />
                  </radialGradient>

                  <filter
                    id="strongGlow"
                    x="-150%"
                    y="-150%"
                    width="400%"
                    height="400%"
                  >
                    <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                    <feGaussianBlur stdDeviation="4" result="innerGlow" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="innerGlow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter
                    id="cornerGlow"
                    x="-200%"
                    y="-200%"
                    width="500%"
                    height="500%"
                  >
                    <feGaussianBlur stdDeviation="6" result="bigGlow" />
                    <feGaussianBlur stdDeviation="3" result="medGlow" />
                    <feGaussianBlur stdDeviation="1.5" result="smallGlow" />
                    <feMerge>
                      <feMergeNode in="bigGlow" />
                      <feMergeNode in="medGlow" />
                      <feMergeNode in="smallGlow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {skillsData.map((skill) => {
                  const isHovered = hoveredSkill === skill.id;
                  const isConnected = isConnectedToHovered(skill.id);
                  const isDimmed = hoveredSkill && !isHovered && !isConnected;
                  const points = getHexagonPoints(
                    skill.position.row,
                    skill.position.col
                  );

                  const centerX =
                    80 +
                    skill.position.col * 100 +
                    (skill.position.row % 2 === 1 ? 50 : 0) +
                    50;
                  const centerY = 50 + skill.position.row * 75 + 25;

                  return (
                    <g
                      key={skill.id}
                      onMouseEnter={() => handleSkillHover(skill.id)}
                      onMouseLeave={handleSkillLeave}
                      style={{
                        cursor: "pointer",
                        transform: isHovered
                          ? "scale(1.15)"
                          : isConnected
                          ? "scale(1.08)"
                          : isDimmed
                          ? "scale(0.95)"
                          : "scale(1)",
                        transformOrigin: `${centerX}px ${centerY}px`,
                        transition: "transform 0.3s ease-out",
                        opacity: isDimmed ? 0.4 : 1,
                      }}
                    >
                      <polygon
                        points={points}
                        fill={getBlackInterior()}
                        stroke={
                          isHovered
                            ? skill.color
                            : isConnected
                            ? "#A855F7"
                            : "url(#neonGradient)"
                        }
                        strokeWidth={isHovered ? "4" : "2"}
                        filter={
                          isHovered ? "url(#cornerGlow)" : "url(#strongGlow)"
                        }
                        style={{
                          transition: "stroke-width 0.3s ease",
                        }}
                      />

                      <SkillIcon
                        skill={skill}
                        isHovered={isHovered}
                        centerX={centerX}
                        centerY={centerY - 10}
                      />

                      {/* Skill Name */}
                      <text
                        x={centerX}
                        y={centerY + 20}
                        textAnchor="middle"
                        fontSize={isHovered ? "9" : "8"}
                        fill="#FFFFFF"
                        fontWeight="bold"
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0 0 8px #00FFFF)"
                            : "drop-shadow(0 1px 2px rgba(0,0,0,0.8))",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {skill.name}
                      </text>
                    </g>
                  );
                })}

                {/* Dynamic hover text showing cluster type */}
                {hoveredSkill &&
                  (() => {
                    const skill = skillsData.find((s) => s.id === hoveredSkill);
                    if (!skill) return null;

                    const clusterNames = {
                      languages: "Programming Languages",
                      frontend: "Frontend Technologies",
                      ai: "AI & Machine Learning",
                      data: "Data Science",
                      backend: "Backend Development",
                      database: "Database Technologies",
                      devops: "DevOps & Cloud",
                    };

                    return (
                      <text
                        x="570"
                        y="390"
                        textAnchor="middle"
                        fontSize="16"
                        fill="#D1D5DB"
                        fontWeight="300"
                      >
                        {clusterNames[skill.cluster] || ""}
                      </text>
                    );
                  })()}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
              <section
          id="projects"
          className="py-8 px-4 sm:px-6 mt-30 max-w-7xl mx-auto bg-gray-800/30 rounded-3xl"
        >
        <div className="text-center mb-6">
          <div className="inline-block">
                          <h2
                className="text-3xl sm:text-4xl font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-white to-cyan-200 bg-clip-text text-transparent"
                style={{
                  filter:
                    "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.2))",
                }}
              >
                Featured Projects
              </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="carousel-container px-16 py-6">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${
                  currentProjectIndex * (100 / projects.length)
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="carousel-slide">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 group h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-400">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.github}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <span className="text-sm text-gray-500">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mb-4 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                      <div className="flex items-center space-x-2 mb-1">
                        <Target className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">
                          Impact
                        </span>
                      </div>
                      <p className="text-sm text-green-300">{project.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-2 space-x-2">
          {Array.from({ length: projects.length - 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProjectIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProjectIndex
                  ? "bg-cyan-400 scale-100"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            {currentProjectIndex + 1} of {projects.length} projects
          </span>
        </div>
      </section>

      {/* Professional Journey - Horizontal Timeline Design */}
      <section id="experience" className="py-8 px-4 max-w-7xl mx-auto mt-6">
        <div className="text-center mb-6">
          <div className="inline-block">
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-white to-cyan-200 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.2))",
              }}
            >
              Professional Journey
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Mobile List View - Visible only on small screens */}
        <div className="lg:hidden bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 mb-6">
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Software Developer Intern",
                company: "Elysium Security",
                period: "Feb 2025 – Present",
                duration: "Current",
                location: "Buffalo, NY",
                type: "Current Role",
                icon: Shield,
                color: "cyan",
                achievements: [
                  "Optimized deep learning models (YOLOv8, R(2+1)D, Transformer–BiLSTM–CNN)",
                  "Deployed real-time Flask + Docker + RTSP system with dashboard alerts for officials",
                  "Boosted theft detection accuracy by 50% and engineered scalable pipelines and tracked experiments (PyTorch, TensorFlow, OpenCV, MLflow, GitHub)",
                ],
                technologies: [
                  "PyTorch",
                  "OpenCV",
                  "YOLO",
                  "3D CNNs",
                  "Flask APIs",
                  "Docker",
                  "MLflow",
                ],
                year: "2025",
              },
              {
                id: 2,
                title: "MS Computer Science & Engineering",
                company: "University at Buffalo",
                period: "2024 – 2026",
                duration: "2 years",
                location: "Buffalo, NY",
                type: "Graduate Education",
                icon: GraduationCap,
                color: "purple",
                achievements: [
                  "Maintained a 3.6 GPA in AI/ML track with strong performance in core subjects",
                  "Earned top grades in Algorithms, Operating Systems, and Deep Learning",
                ],
                technologies: [
                  "Machine Learning",
                  "Deep Learning",
                  "Algorithm Design",
                  "Operating Systems",
                  "Database Systems",
                ],
                year: "2024",
              },
              {
                id: 3,
                title: "Full Stack Web Developer",
                company: "Spartangator Digital",
                period: "Aug 2023 – Jul 2024",
                duration: "12 months",
                location: "Hyderabad, India",
                type: "Full-time",
                icon: Monitor,
                color: "cyan",
                achievements: [
                  "Built and deployed scalable full-stack apps using MERN, Django, Flask and RESTful APIs on AWS/GCP",
                  "Improved accessibility and responsiveness with WCAG-compliant UIs",
                ],
                technologies: [
                  "MERN Stack",
                  "Django",
                  "Flask",
                  "AWS",
                  "GCP",
                  "Tailwind CSS",
                  "RESTful APIs",
                ],
                year: "2023",
              },
              {
                id: 4,
                title: "Full Stack Web Development Intern",
                company: "Spartangator Digital",
                period: "Jan – Jun 2023",
                duration: "6 months",
                location: "Hyderabad, India",
                type: "Internship",
                icon: Code,
                color: "purple",
                achievements: [
                  "Delivered a production-ready MERN app for seamless inventory and transaction management",
                  "Enabled data-driven decisions with real-time analytics and reporting",
                ],
                technologies: [
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "Real-time Analytics",
                  "REST APIs",
                ],
                year: "2023",
              },
            ].map((item) => {
              const isExpanded = expandedCard === item.id;
              const getColorClasses = (color) => {
                const colors = {
                  cyan: {
                    border: "border-cyan-500/50",
                    icon: "bg-cyan-500",
                    text: "text-cyan-400",
                    tag: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
                  },
                  purple: {
                    border: "border-purple-500/50",
                    icon: "bg-purple-500",
                    text: "text-purple-400",
                    tag: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
                  },
                };
                return colors[color];
              };
              const colors = getColorClasses(item.color);

              return (
                <div
                  key={item.id}
                  className={`bg-gray-700/50 rounded-xl border ${colors.border} p-4 transition-all duration-300 hover:shadow-xl cursor-pointer group`}
                  onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${colors.icon} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white leading-tight">
                          {item.title}
                        </h3>
                        <div className={`px-2 ${colors.tag} rounded-md text-xs font-semibold ml-2`}>
                          {item.type}
                        </div>
                      </div>
                      <p className={`font-medium ${colors.text} text-sm mb-1`}>
                        {item.company}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mb-2">
                        <span>{item.period}</span>
                        <span>{item.duration}</span>
                        <span>{item.location}</span>
                      </div>
                      
                      {/* Expansion indicator */}
                      <div className="flex items-center justify-center">
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-gray-600 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                          {/* Achievements */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">
                              Key Achievements
                            </h4>
                            {item.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start">
                                <Star className="w-2 h-2 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-xs text-gray-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {item.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-1 py-0.5 bg-gray-700 text-gray-300 rounded text-xs font-medium border border-gray-600"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background Card Container - Reduced padding - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:block bg-gray-800/50 backdrop-blur-sm rounded-3xl p-2 border border-gray-700">
          {/* Horizontal Timeline Container - Increased padding */}
          <div className="relative max-w-6xl mx-auto py-10">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 via-cyan-500 to-purple-500 rounded-full transform -translate-y-1/2"></div>

            {/* Timeline Items */}
            <div className="flex justify-between items-center relative px-8">
              {[
                {
                  id: 1,
                  title: "Software Developer Intern",
                  company: "Elysium Security",
                  period: "Feb 2025 – Present",
                  duration: "Current",
                  location: "Buffalo, NY",
                  type: "Current Role",
                  icon: Shield,
                  color: "cyan",
                  position: "top",
                  achievements: [
                    "Optimized deep learning models (YOLOv8, R(2+1)D, Transformer–BiLSTM–CNN) ",
                    "Deployed real-time Flask + Docker + RTSP system with dashboard alerts for officials",
                    "Boosted theft detection accuracy by 50% and engineered scalable pipelines and tracked experiments (PyTorch, TensorFlow, OpenCV, MLflow, GitHub)",
                  ],
                  technologies: [
                    "PyTorch",
                    "OpenCV",
                    "YOLO",
                    "3D CNNs",
                    "Flask APIs",
                    "Docker",
                    "MLflow",
                  ],
                  year: "2025",
                },
                {
                  id: 2,
                  title: "MS Computer Science & Engineering",
                  company: "University at Buffalo",
                  period: "2024 – 2026",
                  duration: "2 years",
                  location: "Buffalo, NY",
                  type: "Graduate Education",
                  icon: GraduationCap,
                  color: "purple",
                  position: "bottom",
                  achievements: [
                    "Maintained a 3.6 GPA in AI/ML track with strong performance in core subjects",
                    "Earned top grades in Algorithms, Operating Systems, and Deep Learning",
                  ],
                  technologies: [
                    "Machine Learning",
                    "Deep Learning",
                    "Algorithm Design",
                    "Operating Systems",
                    "Database Systems",
                  ],
                  year: "2024",
                },
                {
                  id: 3,
                  title: "Full Stack Web Developer",
                  company: "Spartangator Digital",
                  period: "Aug 2023 – Jul 2024",
                  duration: "12 months",
                  location: "Hyderabad, India",
                  type: "Full-time",
                  icon: Monitor,
                  color: "cyan",
                  position: "top",
                  achievements: [
                    "Built and deployed scalable full-stack apps using MERN, Django, Flask and RESTful APIs on AWS/GCP",
                    "Improved accessibility and responsiveness with WCAG-compliant UIs",
                  ],
                  technologies: [
                    "MERN Stack",
                    "Django",
                    "Flask",
                    "AWS",
                    "GCP",
                    "Tailwind CSS",
                    "RESTful APIs",
                  ],
                  year: "2023",
                },
                {
                  id: 4,
                  title: "Full Stack Web Development Intern",
                  company: "Spartangator Digital",
                  period: "Jan – Jun 2023",
                  duration: "6 months",
                  location: "Hyderabad, India",
                  type: "Internship",
                  icon: Code,
                  color: "purple",
                  position: "bottom",
                  achievements: [
                    "Delivered a production-ready MERN app for seamless inventory and transaction management",
                    "Enabled data-driven decisions with real-time analytics and reporting",
                  ],
                  technologies: [
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "Real-time Analytics",
                    "REST APIs",
                  ],
                  year: "2023",
                },
              ].map((item, index) => {
                const getColorClasses = (color) => {
                  const colors = {
                    cyan: {
                      border: "border-cyan-500/50",
                      icon: "bg-cyan-500",
                      text: "text-cyan-400",
                      tag: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
                      glow: "shadow-cyan-500/30",
                      line: "bg-cyan-500",
                    },
                    purple: {
                      border: "border-purple-500/50",
                      icon: "bg-purple-500",
                      text: "text-purple-400",
                      tag: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
                      glow: "shadow-purple-500/30",
                      line: "bg-purple-500",
                    },
                  };
                  return colors[color];
                };

                const colors = getColorClasses(item.color);
                const isExpanded = expandedCard === item.id;
                const isTop = item.position === "top";

                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col items-center transition-all duration-300"
                  >
                    {/* Timeline Node - positioned on the timeline */}
                    <div
                      className={`absolute ${
                        isTop ? "bottom-1/2 mb-[-24px]" : "top-1/2 mt-[-24px]"
                      } left-1/2 transform -translate-x-1/2 z-20`}
                    >
                      <div
                        className={`w-12 h-12 ${colors.icon} rounded-full border-4 border-gray-800 shadow-xl ${colors.glow} flex items-center justify-center transition-all duration-300 hover:scale-110`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      {/* Connecting Line to Card */}
                      <div
                        className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 ${
                          colors.line
                        } ${
                          isTop
                            ? `top-full ${isExpanded ? "h-16" : "h-9"}`
                            : `bottom-full ${isExpanded ? "h-16" : "h-9"}`
                        }`}
                      ></div>
                    </div>

                    {/* Year Label - positioned near timeline */}
                    <div
                      className={`absolute ${
                        isTop
                          ? `bottom-1/2 ${isExpanded ? "mb-12" : "mb-8"}`
                          : `top-1/2 ${isExpanded ? "mt-12" : "mt-8"}`
                      } left-1/2 transform -translate-x-1/2 text-lg font-bold ${
                        colors.text
                      } z-10`}
                    >
                      {item.year}
                    </div>

                    {/* Timeline Card Container */}
                    <div
                      className={`w-full ${isTop ? "w-[130%]" : ""} ${
                        isTop
                          ? isExpanded
                            ? "mt-20 h-80 flex flex-col justify-start" // Top cards: align to top when expanded
                            : "mt-64"
                          : isExpanded
                          ? "mb-20 h-80 flex flex-col justify-end" // Bottom cards: align to bottom when expanded
                          : "mb-64"
                      }`}
                    >
                      <div
                        className={`bg-gray-800 rounded-xl border ${
                          colors.border
                        } p-4 transition-all duration-300 hover:shadow-xl cursor-pointer group relative ${
                          colors.glow
                        } hover:shadow-2xl ${
                          isExpanded ? "transform scale-105 z-30" : "z-10"
                        }`}
                        onClick={() =>
                          setExpandedCard(isExpanded ? null : item.id)
                        }
                        style={{
                          minHeight: isExpanded ? "auto" : "110px",
                        }}
                      >
                        {/* Card Content */}
                        <div className="space-y-2 mt-2">
                          <h3 className="text-sm font-bold text-white leading-tight">
                            {item.title}
                          </h3>
                          <p className={`font-medium ${colors.text} text-xs`}>
                            {item.company}
                          </p>

                          <div className="flex justify-between items-center">
                            <div className="text-xs text-gray-400">
                              {item.duration}
                            </div>
                            <div
                              className={`px-2 ${colors.tag} rounded-md text-xs font-semibold`}
                            >
                              {item.type}
                            </div>
                          </div>

                          {/* Expansion indicator */}
                          <div className="flex items-center justify-center">
                            <ChevronDown
                              className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-gray-600 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="flex items-center text-xs text-gray-400">
                              <MapPin className="w-3 h-3 mr-1" />
                              {item.location}
                            </div>

                            {/* Achievements */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-semibold text-gray-300">
                                Key Achievements
                              </h4>
                              {item.achievements.map((achievement, idx) => (
                                <div key={idx} className="flex items-start">
                                  <Star className="w-2 h-2 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-xs text-gray-300 leading-relaxed">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Technologies */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-semibold text-gray-300">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-1 py-0.5 bg-gray-700 text-gray-300 rounded text-xs font-medium border border-gray-600"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Timeline Start and End Indicators */}
            <div className="absolute top-1/2 left-4 w-4 h-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full shadow-lg transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-4 w-4 h-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full shadow-lg transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-8 px-4 max-w-7xl mx-auto mt-6">
        <div className="text-center mb-6">
          <div className="inline-block">
            <h2
              className="text-3xl sm:text-4xl font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-white to-cyan-200 bg-clip-text text-transparent"
              style={{
                filter:
                  "drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)) drop-shadow(0 0 15px rgba(6, 182, 212, 0.2))",
              }}
            >
              Certifications
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Background Card Container */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4">
              {/* Oracle Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-teal-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center">
                  <a
                    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=B8DA8AADFD28816BB4AEA25736AFB616AA0FDE9AD88CD7A4892CF240867F21E2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="text-lg font-semibold text-teal-300 group-hover:text-teal-200 transition-colors cursor-pointer">
                      Oracle Certified Associate, Java SE 8 Programmer
                    </h3>
                  </a>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      April 2023
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Oracle
                    </span>
                  </div>
                </div>
              </div>

              {/* NPTEL Elite Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-slate-400/50 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-300">
                    Elite Certification for Social Networks
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      October 2021
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      NPTEL
                    </span>
                  </div>
                </div>
              </div>

              {/* NPTEL Silver Elite Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-slate-400/50 transition-all duration-300">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-300">
                    Silver Elite Certification for Data Science
                  </h3>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      September 2021
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      NPTEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursera Python Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center">
                  <a
                    href="https://coursera.org/verify/AS8CDC5RPUX9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="text-lg font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors cursor-pointer">
                      Retrieving, Processing, and Visualizing Data with Python
                    </h3>
                  </a>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      November 2020
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      University of Michigan | Coursera
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursera Data Science Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-sky-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center">
                  <a
                    href="https://coursera.org/verify/ZBQFW4GTVS4D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="text-lg font-semibold text-sky-300 group-hover:text-sky-200 transition-colors cursor-pointer">
                      Introduction to Data Science in Python
                    </h3>
                  </a>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      October 2020
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      University of Michigan | Coursera
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursera Neural Networks Certification */}
              <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 hover:border-indigo-400/50 transition-all duration-300 group">
                <div className="flex justify-between items-center">
                  <a
                    href="https://coursera.org/verify/HLPL7HJN29P8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <h3 className="text-lg font-semibold text-indigo-300 group-hover:text-indigo-200 transition-colors cursor-pointer">
                      Neural Networks and Deep Learning
                    </h3>
                  </a>
                  <div className="flex items-center space-x-6 text-sm text-gray-300">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      October 2020
                    </span>
                    <span className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      DeepLearning.AI | Coursera
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent px-4">
          Let's Build Something Amazing Together
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-300 mb-6">
                Ready to turn your ideas into reality? I'm always excited to
                collaborate on innovative projects that make a difference.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <a
                  href="mailto:evangelene.grace@gmail.com"
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <Mail className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                    evangelene.grace@gmail.com
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/grace-evangelene"
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                    grace-evangelene
                  </span>
                </a>

                <a
                  href="https://github.com/graceevangelene"
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-purple-400 transition-colors">
                    graceevangelene
                  </span>
                </a>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setVisitorType("developer");
                    setTimeout(() => {
                      scrollToSection("developer");
                    }, 100);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  Collaborate on a Project
                </button>
                <button
                  onClick={() => {
                    setVisitorType("recruiter");
                    setTimeout(() => {
                      scrollToSection("recruiter");
                    }, 100);
                  }}
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  Search My Skills
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Grace Evangelene. Built with React, Three.js, and lots of ☕
          </p>
          <p className="text-sm text-gray-500 mt-2">
            "Building intelligent systems that solve real-world problems"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
