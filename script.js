const cases = {
  audio: {
    index: "CASE STUDY / 01",
    eyebrow: "BOSE PROFESSIONAL · NETWORKED PRODUCTS",
    title: "Networked audio controller platform",
    summary: "Firmware and platform integration for professional audio control products, spanning embedded controller behavior, network services, configuration, and Linux-side capabilities.",
    role: "Résumé-supported: firmware architecture and development, persistent storage, serial/Ethernet bootloader work, TouchGFX integration, TCP/IP and AES70 services, and Embedded Linux integration.",
    sections: [
      ["System overview", "The work crosses several boundaries: a microcontroller-based controller, a user-facing display, network control/discovery services, and a Linux platform supporting product-level connectivity and peripherals."],
      ["Illustrative architecture", "This diagram is a high-level portfolio illustration, not a released product block diagram. Exact interfaces and deployment boundaries should be verified before publication."],
      ["Engineering focus", "Designing communication interfaces; implementing device configuration and persistent settings; integrating firmware-update paths; connecting display and controller behavior; and coordinating embedded firmware with Linux-side services."],
      ["Evidence to add", "If cleared for public sharing, add a sanitized protocol flow, a generic update-state diagram, test evidence, and a short account of one difficult integration issue and how it was resolved."]
    ],
    diagram: [["UI / TOUCHGFX","Device controls"],["MCU FIRMWARE","State · storage"],["NETWORK SERVICES","TCP/IP · AES70"],["LINUX PLATFORM","Yocto · drivers"]],
    tags: ["STM32", "TouchGFX", "TCP/IP", "AES70", "Yocto", "Firmware update"]
  },
  linux: {
    index: "CASE STUDY / 02",
    eyebrow: "BOSE PROFESSIONAL · PLATFORM ENGINEERING",
    title: "Embedded Linux & board bring-up",
    summary: "Customizing an Embedded Linux platform and integrating board-level functionality across the build system, device tree, kernel drivers, and product peripherals.",
    role: "Résumé-supported: Yocto platform work, device-tree configuration, kernel integration, HDMI audio enablement, USB functionality, and low-level board bring-up.",
    sections: [
      ["System overview", "A typical board bring-up effort moves from the boot and build configuration into device-tree and driver integration, then validates each peripheral and its interaction with the wider system."],
      ["Illustrative architecture", "The diagram communicates the engineering layers rather than the exact internal product architecture. The named board and production-specific details are intentionally omitted."],
      ["Engineering focus", "Separating build configuration from runtime behavior; checking hardware descriptions against actual board wiring; integrating drivers; and narrowing failures across kernel, peripheral, and application boundaries."],
      ["Evidence to add", "Add a sanitized bring-up checklist, a public sample device-tree change if appropriate, and a troubleshooting story with the symptom, diagnostic evidence, root cause, and validation."]
    ],
    diagram: [["YOCTO BUILD","Layers · recipes"],["KERNEL / DT","Drivers · config"],["BOARD HARDWARE","Clocks · buses"],["USER SPACE","Services · tests"]],
    tags: ["Yocto", "Embedded Linux", "Device Tree", "Kernel", "HDMI audio", "USB"]
  },
  agv: {
    index: "CASE STUDY / 03",
    eyebrow: "UNBOX ROBOTICS · AUTONOMOUS SYSTEMS",
    title: "AGV firmware & fleet connectivity",
    summary: "Real-time firmware and communication interfaces for autonomous guided vehicles and warehouse automation, with device control and fleet telemetry in the same system.",
    role: "Résumé-supported: AGV firmware, microcontroller APIs, smart charging, CAN/CAN FD, Modbus TCP, MQTT over Ethernet, and OTA update mechanisms.",
    sections: [
      ["System overview", "Vehicle firmware needs to coordinate low-level hardware, real-time control paths, and communication with surrounding systems. Reliable update and recovery paths matter because the device operates as part of a fleet."],
      ["Illustrative architecture", "This is a generalized AGV data-flow diagram. It is not a disclosure of a proprietary robot design, fleet protocol, or deployed network topology."],
      ["Engineering focus", "Integrating motor controllers and actuators; implementing communication over field and network protocols; supporting telemetry; and considering update behavior in deployed equipment."],
      ["Evidence to add", "If available and cleared, include a generalized CAN message flow, a mock telemetry example, or a test setup. Add verified performance or reliability outcomes only when you can substantiate them."]
    ],
    diagram: [["SENSORS / ACTUATORS","I/O · drivers"],["REAL-TIME FW","Control loops"],["VEHICLE NETWORK","CAN / CAN FD"],["FLEET SERVICES","MQTT · Modbus"]],
    tags: ["FreeRTOS", "CAN FD", "Modbus TCP", "MQTT", "Ethernet", "OTA"]
  },
  motor: {
    index: "CASE STUDY / 04",
    eyebrow: "UNBOX ROBOTICS · MOTOR CONTROL",
    title: "BLDC motor drivers & validation tools",
    summary: "Low-level driver development and motor-control firmware, paired with team coordination and automated tools for hardware validation and manufacturing quality checks.",
    role: "Résumé-supported: six-step and FOC motor-control algorithms for hub/drum BLDC motors, UART/timer/motor drivers, code reviews, mentoring, and GPT-assisted PCB/driver validation tooling.",
    sections: [
      ["System overview", "Motor-control firmware sits between application-level motion demands and the electrical behavior of a motor driver. Repeatable validation helps engineers detect integration and manufacturing issues earlier."],
      ["Illustrative architecture", "This is a conceptual control-and-test flow. It intentionally excludes implementation details, tuning parameters, schematics, and proprietary validation logic."],
      ["Engineering focus", "Driver and peripheral integration; choosing and implementing control approaches; collaborating across firmware, controls, and hardware; and creating repeatable diagnostic workflows."],
      ["Evidence to add", "Add a generic control-loop diagram, a mock test report, or an anonymized validation flow. Include measurable outcomes only after confirming the baseline, measurement method, and permission to publish."]
    ],
    diagram: [["COMMAND INPUT","Target / state"],["CONTROL LOGIC","FOC / 6-step"],["DRIVER + MOTOR","Power stage"],["VALIDATION","Tests · diagnostics"]],
    tags: ["Embedded C", "FOC", "Six-step", "BLDC", "Python", "Validation"]
  }
};

const dialog = document.querySelector("#case-dialog");
const dialogContent = document.querySelector("#dialog-content");
document.querySelectorAll(".case-open").forEach(button => {
  button.addEventListener("click", () => {
    const item = cases[button.dataset.case];
    document.querySelector("#dialog-index").textContent = item.index;
    dialogContent.innerHTML = `
      <div class="eyebrow">${item.eyebrow}</div>
      <h2>${item.title}</h2>
      <p>${item.summary}</p>
      <div class="case-callout"><span class="verify-label">Scope / résumé-supported</span><br>${item.role}</div>
      <h3>${item.sections[0][0]}</h3><p>${item.sections[0][1]}</p>
      <h3>${item.sections[1][0]}</h3><div class="diagram">${item.diagram.map(d => `<div>${d[0]}<small>${d[1]}</small></div>`).join("")}</div><p>${item.sections[1][1]}</p>
      <h3>${item.sections[2][0]}</h3><p>${item.sections[2][1]}</p>
      <h3>${item.sections[3][0]}</h3><p>${item.sections[3][1]}</p>
      <div class="case-tags">${item.tags.map(t => `<span>${t}</span>`).join("")}</div>`;
    dialog.showModal();
  });
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), {threshold: 0.08});
document.querySelectorAll(".project-card,.expertise-card,.timeline-item,.about-block").forEach(el => {
  el.classList.add("reveal"); observer.observe(el);
});
