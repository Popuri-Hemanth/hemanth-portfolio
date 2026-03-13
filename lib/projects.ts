export type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  architectureHighlight: string;
  github?: string;
  featured?: boolean;
  keyConcepts?: string;
};

export const projects: Project[] = [
  {
    title: "RISC-V 5 Stage Pipelined Processor",
    slug: "riscv-pipeline",
    description:
      "Custom RISC-V core implementing a classic 5-stage pipeline (IF, ID, EX, MEM, WB) with hazard detection, forwarding, and branch handling tuned for FPGA deployment.",
    technologies: [
      "Verilog",
      "RISC-V",
      "Pipelining",
      "FPGA",
      "Timing Analysis",
    ],
    architectureHighlight:
      "Designed clean stage boundaries with hazard detection and forwarding units to keep single-cycle throughput under tight timing closure on mid-range FPGAs.",
    github: "https://github.com/Popuri-Hemanth",
    featured: true,
    keyConcepts: "Pipelining • Hazard Detection • Forwarding • Branch Prediction",
  },
  {
    title: "Network on Chip Router",
    slug: "noc-router",
    description:
      "Parameterized Network-on-Chip router with virtual channels, credit-based flow control, and deadlock-free routing for scalable many-core SoCs.",
    technologies: ["Verilog", "Network on Chip", "FSM Design", "Routing"],
    architectureHighlight:
      "Implements wormhole switching with virtual channels and adaptive routing, allowing multiple traffic classes to coexist without head-of-line blocking.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "AI Tensor Processing Unit",
    slug: "ai-tpu",
    description:
      "AI-focused compute engine with systolic array-inspired MAC tiles optimized for matrix-heavy workloads like CNNs and transformers.",
    technologies: ["Verilog", "RTL", "MAC Array", "High-Level Synthesis"],
    architectureHighlight:
      "Exploits data reuse through local buffers and streaming interfaces, significantly reducing off-chip bandwidth requirements.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "AI Powered Rummy Table Scoring System",
    slug: "ai-rummy-scoring",
    description:
      "Computer vision pipeline that reads rummy cards from a live table feed and computes scores automatically in real time.",
    technologies: ["Python", "OpenCV", "YOLO", "Computer Vision"],
    architectureHighlight:
      "Combines card detection, perspective correction, and ranking logic to deliver low-latency scoring suitable for multi-player tables.",
    github: "https://github.com/Popuri-Hemanth",
    featured: true,
    keyConcepts: "Card Detection • Perspective Correction • YOLO • Real-time Scoring",
  },
  {
    title: "Multiplayer Rummy Platform",
    slug: "rummy-platform",
    description:
      "Online multiplayer rummy experience with real-time state synchronization, user management, and secure scoring.",
    technologies: ["React", "Node.js", "WebSockets", "Microservices"],
    architectureHighlight:
      "Separates game orchestration, scoring, and user services, enabling future integration of AI-based assistants and analytics.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "Smart Agricultural Charging Robot",
    slug: "agri-charging-robot",
    description:
      "Autonomous robot for precision agriculture that navigates fields, monitors conditions, and returns to a charging dock intelligently.",
    technologies: ["Embedded C", "ESP32", "Robotics", "Sensors"],
    architectureHighlight:
      "Fuses IMU, GPS, and proximity sensors on embedded controllers to maintain robust navigation even in noisy outdoor environments.",
    github: "https://github.com/Popuri-Hemanth",
    featured: true,
    keyConcepts: "Autonomous Navigation • Sensor Fusion • Charging Dock • Precision Agriculture",
  },
  {
    title: "Driver Fatigue Detection System",
    slug: "fatigue-detection",
    description:
      "Real-time driver monitoring system that detects drowsiness using facial landmarks and eye-blink analysis.",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    architectureHighlight:
      "Runs on edge hardware with efficient vision models optimized for low-light cabin environments and limited compute budgets.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "Smart Walking Stick",
    slug: "smart-walking-stick",
    description:
      "Assistive device with obstacle detection, fall alerts, and navigation guidance for visually impaired users.",
    technologies: ["Embedded C", "Ultrasonic Sensors", "IoT", "ESP32"],
    architectureHighlight:
      "Combines sensor fusion and haptic feedback to provide intuitive guidance without overloading the user with information.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "IoT Sensor Dashboard",
    slug: "iot-dashboard",
    description:
      "Real-time dashboard for aggregating and visualizing sensor data from multiple edge devices with alerting and export.",
    technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
    architectureHighlight:
      "Streaming ingestion, time-series aggregation, and role-based access for fleet monitoring.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "FPGA Image Preprocessor",
    slug: "fpga-image-preprocessor",
    description:
      "Hardware accelerator for image preprocessing (resize, normalize, format conversion) to feed vision pipelines with low latency.",
    technologies: ["Verilog", "FPGA", "Image Processing", "AXI"],
    architectureHighlight:
      "Pipelined datapath with DMA and double-buffering for continuous throughput.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "Real-Time Collaborative Whiteboard",
    slug: "collab-whiteboard",
    description:
      "Browser-based whiteboard with multi-user cursors, shapes, and persistence using CRDT-style sync.",
    technologies: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    architectureHighlight:
      "Operational transform and presence for sub-100ms collaboration feel.",
    github: "https://github.com/Popuri-Hemanth",
  },
  {
    title: "Embedded RTOS Task Scheduler",
    slug: "embedded-rtos-scheduler",
    description:
      "Lightweight preemptive task scheduler for MCUs with priorities, semaphores, and tick-driven timing.",
    technologies: ["Embedded C", "STM32", "FreeRTOS-style", "ARM Cortex-M"],
    architectureHighlight:
      "Minimal footprint, configurable tick and context switch for resource-constrained targets.",
    github: "https://github.com/Popuri-Hemanth",
  },
];

